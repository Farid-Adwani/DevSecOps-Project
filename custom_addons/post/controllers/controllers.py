# -*- coding: utf-8 -*-
# from odoo import http


# class Publication(http.Controller):
#     @http.route('/publication/publication', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/publication/publication/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('publication.listing', {
#             'root': '/publication/publication',
#             'objects': http.request.env['post.post'].search([]),
#         })

#     @http.route('/publication/publication/objects/<model("post.post"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('publication.object', {
#             'object': obj
#         })
