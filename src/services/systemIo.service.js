const axios = require('axios');
const config = require('../config/config');
const { json } = require('express');

class SystemIoService {
    constructor() {
        this.baseUrl = config.systemIoBaseUrl;
        this.apiKey = config.systemIoApiKey;
    }

    async callApi(method, endpoint, data = null) {
        try {
            const response = await axios({
                method,
                url: `${this.baseUrl}${endpoint}`,
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'X-API-Key': this.apiKey
                },
                data: method !== 'GET' ? data : undefined
            });

            return response.data;
        } catch (error) {
            console.error('Erreur API System.io:', {
                status: error.response?.status,
                data: error.response?.data,
                message: error.message
            });
            throw new Error(JSON.stringify({
                success: false,
                data: error.response?.data,
                message: error.response?.message
            }));
        }
    }

    async createContact(contactData) {
        const payload = {
            email: contactData.email,
            locale: 'fr',
            fields: [
                { slug: 'first_name', value: contactData.first_name },
                { slug: 'surname', value: contactData.surname },
                { slug: 'country', value: contactData.country }
            ]
        };

        if (contactData.phone_number) {
            payload.fields.push({ slug: 'phone_number', value: contactData.phone_number });
        }

        return this.callApi('POST', 'contacts', payload);
    }

    async attachTagToContact(contactId, tagId) {
        try {
            await this.callApi('POST', `contacts/${contactId}/tags`, { tagId });
            return true;
        } catch (error) {
            console.error('Erreur lors de l\'attachement du tag:', error);
            return false;
        }
    }

    async getTags() {
        return this.callApi('GET', 'tags');
    }

    async getTagById(tagId) {
        return this.callApi('GET', `tags/${tagId}`);
    }
}

module.exports = new SystemIoService(); 