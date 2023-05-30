FROM odoo:15

# Copy custom addons to the container
COPY ./custom_addons /mnt/extra-addons