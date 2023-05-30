# -*- coding: utf-8 -*-
from odoo import http, fields
from odoo.http import request
from odoo.addons.http_routing.models.ir_http import slug
from random import randint, randrange
import re
import base64
from odoo.exceptions import ValidationError, UserError
import json
import werkzeug


class Sitelab(http.Controller):

    @http.route('/publication/like', type='json', auth="user", methods=['POST'])
    def create_publication_like(self, **kwargs):
        partner = request.env.user.partner_id
        publication_id = int(kwargs.get('id', 0))
        state = int(kwargs.get('state', 0))
        publication_obj = request.env['post.post']
        publication = publication_obj.browse(publication_id)
        like=request.env['publication.like'].sudo().search(['&',('publication_id','=',publication_id),('owner','=',partner.id)])

        if state and len(like)==0:
            # Create the like
            like_obj = request.env['publication.like']
            like_vals = {
                'owner': partner.id,
                'publication_id': publication_id,
            }
            like = like_obj.sudo().create(like_vals)
            # Add the comment to the publication's comments field
            publication.likes = [(4, like.id)]
        elif state==False:
            like_id=like.id
            like.unlink()
            publication.likes = [(3, like_id)]


        return 'like updated successfully!'
    
    @http.route('/publication/comment', type='json', auth="user", methods=['POST'])
    def create_publication_comment(self, **kwargs):
        partner = request.env.user.partner_id
        print(kwargs)

        publication_id = int(kwargs.get('id', 0))
        comment = kwargs.get('comment', '')
        # Create the comment
        comment_obj = request.env['publication.comment']
        comment_vals = {
            'owner': partner.id,
            'comment': comment,
            'publication_id': publication_id,
        }
        comment = comment_obj.sudo().create(comment_vals)
        print(publication_id)        
        # Add the comment to the publication's comments field
        publication_obj = request.env['post.post']
        publication = publication_obj.browse(publication_id)
        publication.comments = [(4, comment.id)]

        print(publication.comments )
        print("yessssssssssssssssssssssss")
        return 'Comment created successfully!'
    def getPage(self, model_obj, domain, page):
        return model_obj.sudo().search(domain, offset=page*2, limit=2,order='date DESC')

    @http.route('/feedPage/<int:page>', type='http', auth="user", website=True)
    def feedPage(self, page):
        person = request.env.user.partner_id

        domain = []

        all_feeds=self.getPage(request.env["post.post"],domain,page)
        all_feeds_data = []
        for ann in all_feeds:
            owner_href = ""
            im=""
            if ann.person_id.id:
                owner_href = "/person_details/" +slug(ann.person_id)
                im=ann.person_id.image_1920 
                owner_name = ann.person_id.name
                
           
            comments=[]
            for com in ann.comments:
                comments.append({
                    'com_text':com.comment,
                    'com_name':com.owner.name,
                    'com_img':'data:image/png;base64,' + com.owner.image_1920.decode('utf-8')  if com.owner.image_1920 else "",
                })

            likes=[]
            for l in ann.likes:
                likes.append({
                    'name':l.owner.name,
                    'image':'data:image/png;base64,' + l.owner.image_1920.decode('utf-8')  if l.owner.image_1920 else "",
                })

            ann_data = {
                'id': ann.id,
                'name': ann.name,
                'description': ann.description,
                'owner_href': owner_href,
                'date': str(ann.date),
                'owner_name': owner_name,
                'connected_img':  'data:image/png;base64,' + person.image_1920.decode('utf-8')  if person.image_1920 else "",
                'connected_name': person.name,
                'comments': comments,
                'liked': person.id in ann.likes.owner.ids,
                'likes': likes

                

            }
            if im:
                ann_data['owner_image_profil'] = 'data:image/png;base64,' + im.decode('utf-8')
            else:
                ann_data['owner_image_profil'] = ""

            if ann.image:
                ann_data['image'] = 'data:image/png;base64,' + ann.image.decode('utf-8')
                
            else:
                ann_data['image'] = ''
            all_feeds_data.append(ann_data)
        return json.dumps(all_feeds_data)

    @http.route('/feed', type='http', auth="user", website=True)
    def feed(self, **kw):
        person = request.env.user.partner_id

        return http.request.render(
            'site_web.feed', {
                # 'all_feeds':all_feeds,
                "name": person.name,
                "posts": len(person.my_news),
                "phone": person.phone,
                "country": person.country_id.name,
                "bio": person.bio,
                "image":'data:image/png;base64,' + person.image_1920.decode('utf-8')  if person.image_1920 else "../../../site_web/static/img/unknown.png"


            })

  
    @http.route('/person_details/<model("res.partner"):person>/', type='http', auth="public", website=True)
    def cv(self, person, **kw):
        # person = request.env['res.partner'].search([])
        # department=request.env['lab.department'].search([])
        # univ = request.env['lab.university'].search([])
        return http.request.render(
            'site_web.cv', {
                'person': person,

            })

    @http.route('/people_details/<model("res.partner"):person>/', type='http', auth="public", website=True)
    def person_details(self, person, **kw):
        # person = request.env['res.partner'].search([])
        # department=request.env['lab.department'].search([])
        # univ = request.env['lab.university'].search([])

        booll = False
        if request.env.user:

            persons_followed = request.env.user.partner_id.person_followed
            if len(persons_followed) != 0:
                for p_i in persons_followed:
                    if p_i.follow_person.id == person.id:

                        booll = True
                    else:
                        booll = False
            else:
                booll = False
        else:
            booll = False

        # news = request.env['post.post'].sudo().search(['|', '&', ('tagged.ref', 'like', 'res.partner,'+str(person.id)), ('tagged.state', '=', 'shared'), '|', ('person_id','in', person.person_followed.follow_person.ids),('company_id', 'in', person.lab_followed.follow_lab.ids)])
        news = person.news_lines
        total_news = len(news)
        # pubs = request.env['publication.article'].sudo().search([('person_id', '=',person.id)])
        pubs = person.publication_lines

        total = len(pubs)

        courses = request.env['person.course'].sudo().search(
            [('person_id', '=', person.id)])
        total_course = len(courses)

        experiences = request.env['hr.resume.line'].sudo().search(
            [('person_id', '=', person.id)])

        education = request.env['person.education'].sudo().search(
            [('person_id', '=', person.id)])

        certifs = request.env['person.certif'].sudo().search(
            [('person_id', '=', person.id)])

        projects = request.env['person.project'].sudo().search(
            [('person_id', '=', person.id)])

        services = request.env['person.service'].sudo().search(
            [('person_id', '=', person.id)])

        taken_courses = request.env['taking.course'].sudo().search(
            [('person_id', '=', person.id)])
        total_taken = len(taken_courses)

        awards = request.env['person.award'].sudo().search(
            [('person_id', '=', person.id)])
        scholarships = request.env['person.scholarship'].sudo().search(
            [('person_id', '=', person.id)])
        fellowships = request.env['person.fellowship'].sudo().search(
            [('person_id', '=', person.id)])
        langues = request.env['person.lang.line'].sudo().search(
            [('person_id', '=', person.id)])

        list_univ = []
        for edu in education:
            # print(edu.university.name)
            list_univ.append(edu.university)

        for univ in list_univ:
            print(univ.name)

        # courses = request.env['slide.channel'].sudo().search([('company_id', '=', lab.id)])
        # total_course = len(courses)
        #
        # projects = request.env['projet.projet'].sudo().search([('company_id', '=', lab.id)])
        # total_project = len(projects)
        #
        # events = request.env['event.event'].sudo().search([('company_id', '=', lab.id)])
        # total_event = len(events)
        #
        # tools = request.env['tool.tool'].sudo().search([('company_id', '=', lab.id)])
        # total_tool = len(tools)
        #
        # jobs = request.env['hr.job'].sudo().search([('company_id', '=', lab.id)])
        # total_job = len(jobs)

        print(total)
        # url = '/people_details/' + slug(person)
        # print(url)
        # pager = request.website.pager(
        #     url='/people_details/' + slug(person),
        #     total=total,
        #     page=page,
        #     step=2,
        # )
        # offset = pager['offset']
        # pubs = pubs[offset: offset + 2]

        return http.request.render(
            'site_web.person_details', {
                'person': person,
                'pubs': pubs,
                'courses': courses,
                'total': total,
                'total_course': total_course,
                'experiences': experiences,
                'education': education,
                'list_univ': list_univ,
                'certifs': certifs,
                'projects': projects,
                'services': services,
                'taken_courses': taken_courses,
                'total_taken': total_taken,
                'awards': awards,
                'scholarships': scholarships,
                'fellowships': fellowships,
                'langues': langues,
                'total_news': total_news,
                'news': news,
                'booll': booll

            })

    @http.route(['/people_details_pub/<model("res.partner"):person>/',
                 '/people_details_pub/<model("res.partner"):person>/search_by_year',
                 '/people_details_pub/<model("res.partner"):person>/page/<int:page>'], type='http', auth="public",
                website=True)
    def person_details_pub(self, person=None, page=None, **kw):
        # person = request.env['res.partner'].search([])
        # department=request.env['lab.department'].search([])
        # univ = request.env['lab.university'].search([])
        if kw.get('year'):
            year = kw.get('year', None)
            print('year', year)
            pubs = []
            pubs1 = request.env['publication.article'].sudo().search(
                [('person_id', '=', person.id)])

            for p in pubs1:
                if p.year == year:
                    print('ok')
                    pubs.append(p)

            total = len(pubs)
            print('test1')
        else:
            pubs = request.env['publication.article'].sudo().search(
                [('person_id', '=', person.id)])

            total = len(pubs)
            print('test2')

        # courses = request.env['slide.channel'].sudo().search([('company_id', '=', lab.id)])
        # total_course = len(courses)
        #
        # projects = request.env['projet.projet'].sudo().search([('company_id', '=', lab.id)])
        # total_project = len(projects)
        #
        # events = request.env['event.event'].sudo().search([('company_id', '=', lab.id)])
        # total_event = len(events)
        #
        # tools = request.env['tool.tool'].sudo().search([('company_id', '=', lab.id)])
        # total_tool = len(tools)
        #
        # jobs = request.env['hr.job'].sudo().search([('company_id', '=', lab.id)])
        # total_job = len(jobs)

        print(total)
        url = '/people_details_pub/' + slug(person)
        print(url)
        pager = request.website.pager(
            url='/people_details_pub/' + slug(person),
            total=total,
            page=page,
            step=3,
        )
        offset = pager['offset']
        pubs = pubs[offset: offset + 3]

        return http.request.render(
            'site_web.person_details_pub', {
                'person': person,
                'pubs': pubs,
                'pager': pager,
                'total': total
            })

  
    @http.route(['/people_details_news/<model("res.partner"):person>/',
                 '/people_details_news/<model("res.partner"):person>/page/<int:page>'], type='http', auth="public",
                website=True)
    def person_details_news(self, person=None, page=None, **kw):

        # news = request.env['post.post'].sudo().search(['|', '&', ('tagged.ref', 'like', 'res.partner,'+str(person.id)), ('tagged.state', '=', 'shared'), '|', ('person_id','in', person.person_followed.follow_person.ids),('company_id', 'in', person.lab_followed.follow_lab.ids)])
        news = person.news_lines

        total_news = len(news)
        # pubs = request.env['post.post'].sudo().search([('person_id', '=', person.id)])
        pubs = person.publication_lines

        total = len(pubs)

        print(total_news)
        url = '/people_details_news/' + slug(person)
        print(url)
        pager = request.website.pager(
            url='/people_details_news/' + slug(person),
            total=total_news,
            page=page,
            step=3,
        )
        offset = pager['offset']
        news = news[offset: offset + 3]

        return http.request.render(
            'site_web.person_details_news', {
                'person': person,
                'news': news,
                'pager': pager,
                'total': total,
                'total_news': total_news
            })

  