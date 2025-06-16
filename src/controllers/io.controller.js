const systemIoService = require('../services/systemIo.service');
const config = require('../config/config');

class IoController {
    async createContact(req, res) {
        try {
            const { email, first_name, surname, country, phone_number } = req.body;

            if (!email || !first_name || !surname || !country) {
                return res.status(400).json({
                    success: false,
                    error: 'Données de contact invalides. Email, prénom, nom et pays sont obligatoires.'
                });
            }

            const contactData = {
                email,
                first_name,
                surname,
                country,
                ...(phone_number && { phone_number })
            };

            const response = await systemIoService.createContact(contactData);

            if (!response.id) {
                return res.status(500).json({
                    success: false,
                    error: 'Erreur lors de la création du contact',
                    details: response
                });
            }

            const tagAttached = await systemIoService.attachTagToContact(
                response.id,
                config.tags['Inscrit']
            );

            if (!tagAttached) {
                return res.status(500).json({
                    success: false,
                    error: 'Erreur lors de l\'association du tag au contact',
                    details: response
                });
            }

            return res.json({
                success: true,
                contactId: response.id,
                tagId: config.tags['Inscrit']
            });

        } catch (error) {
            let parsedError;
            try {
                parsedError = JSON.parse(error.message); 
            } catch (e) {
                parsedError = error.message; 
            }
            return res.status(500).json({
                success: false,
                error: parsedError,
            });
        }
    }

    async getTags(req, res) {
        try {
            const tags = await systemIoService.getTags();
            return res.json(tags);
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async getTagById(req, res) {
        try {
            const { tagId } = req.params;
            if (!tagId) {
                return res.status(400).json({
                    success: false,
                    error: 'ID du tag manquant.'
                });
            }

            const tag = await systemIoService.getTagById(tagId);
            if (!tag.id) {
                return res.status(404).json({
                    success: false,
                    error: 'Impossible de récupérer le tag',
                    details: tag
                });
            }

            return res.json({
                success: true,
                data: tag
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = new IoController(); 