/* eslint-disable linebreak-style */
/* eslint-disable indent */

const routes = (handler) => [
    {
        method: 'POST',
        path: '/export/notes',
        handler: handler.postExportNotesHandler,
        options: {
            auth: 'notesapp_jwt',
        }
    },
];

module.exports = routes;