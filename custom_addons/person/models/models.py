# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
import re
from odoo.exceptions import ValidationError, UserError
from random import randint, randrange
import base64
import bibtexparser
import datetime
from odoo.exceptions import ValidationError, UserError


@api.model

class person(models.Model):
    _inherit = 'res.partner'
    
    bio = fields.Text(string="Bio")
    about = fields.Text(string="About")
    social_twitter = fields.Char('Twitter Account')
    social_facebook = fields.Char('Facebook Account')
    social_github = fields.Char('GitHub Account')
    social_linkedin = fields.Char('LinkedIn Account')
    social_youtube = fields.Char('Youtube Account')
    social_instagram = fields.Char('Instagram Account')
    my_news = fields.One2many("post.post","person_id",   string="My News")

    userrr = fields.Integer( string='User', compute='_compute_userrr')

    @api.depends('userrr')
    def _compute_userrr(self):
        for partner in self:

            partner.userrr = partner.id and partner.env['res.users'].sudo().search([('partner_id', '=', partner.id)], limit=1).id
            print("---------------------")
            print(partner.userrr)
            print(self.env.user)

    def feeds(self):
        return {
            'type': 'ir.actions.act_url',
            'url': '/feed',
            'target': 'new',
        }



class ResUsers(models.Model):
    _inherit = 'res.users'

    @classmethod
    def signup(cls, values, token=None):
        print("roleeeeeeeeeeeee")
        user = super(ResUsers, cls).signup(values, token)
        print("roleeeeeeeeeeeee")
        print("roleeeeeeeeeeeee")
        role=self.env['res.groups'].sudo().search(['name','=','Internal User'])
        print("roleeeeeeeeeeeee")
        print("roleeeeeeeeeeeee")
        print("roleeeeeeeeeeeee")
        print("roleeeeeeeeeeeee")
        print("roleeeeeeeeeeeee")

        print(role)
        role.write({'users': [(4, user)]})
        return user