# -*- coding: utf-8 -*-

from odoo import models, fields, api
import re


class publication_publication(models.Model):
    _name = 'post.post'
    _description = 'post.post'
    _order = 'date desc'
    titre = fields.Char(string="Title", compute="_titre_computed")
    name = fields.Char(string="Title", required=True)
    date = fields.Date(string="Date", required=True)
    description = fields.Text(string="Description",default="")
    current_user = fields.Many2one(
        'res.users', 'User', default=lambda self: self.env.user)

    # added
    comments = fields.One2many('publication.comment','publication_id',string='Comments')
    likes = fields.One2many('publication.like','publication_id',string='Likes')

    person_id = fields.Many2one("res.partner", string="person")
    image = fields.Binary(string="Image")


class PublicationComment(models.Model):
    _name = 'publication.comment'
    
    owner = fields.Many2one('res.partner', string='Owner')
    comment = fields.Text(string='Comment')
    publication_id = fields.Many2one('post.post', string='Publication')

class PublicationLike(models.Model):
    _name = 'publication.like'
    
    owner = fields.Many2one('res.partner', string='Owner')
    publication_id = fields.Many2one('post.post', string='Publication')

