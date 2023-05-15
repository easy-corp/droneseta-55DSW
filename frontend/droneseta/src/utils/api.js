/* Para manter a padronização da URL, bem como
   as configuracoes de headers */

import axios from "axios";

const api = "http://localhost:3500";

axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/json';

    return config;
});

export default api;