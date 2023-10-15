import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('access_token');
const BASE_URL="http://localhost:3000";
// Items
export const getItems = async () => {
    const res = await axios.get(`${BASE_URL}/api/items/get`);
    return res.data;
}

export const CreateOneItem = async (data) => {
    const res = await axios.post(`${BASE_URL}/api/items/create`, data, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    })
    return res.data;
}

export const getOneItem = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/items/get/${id}`);
    return res.data;
}

export const UpdateOneItem = async (id, data) => {
    const res = await axios.post(`${BASE_URL}/api/items/update/${id}`, data, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    });

    return res.data;
}

export const DeleteOneItem = async (id) => {
    const res = await axios.delete(`${BASE_URL}/api/items/delete/${id}`, {
        headers: {"Authorization": `Bearer ${token}`}
    });

    return res.data;
}

export const getItemsByName = async (itemName) => {
    const res = await axios.get(`${BASE_URL}/api/items/getItemsByName?itemName=${itemName}`);

    return res.data;
}

// Services

export const getServices = async () => {
    const res = await axios.get(`${BASE_URL}/api/services/get`);
    return res.data;
}

export const CreateOneService = async (data) => {
    const res = await axios.post(`${BASE_URL}/api/services/create`, data, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    })
    return res.data;
}

export const getOneService = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/services/get/${id}`);
    return res.data;
}

export const UpdateOneService = async (id, data) => {
    const res = await axios.post(`${BASE_URL}/api/services/update/${id}`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    });

    return res.data;
}

export const DeleteOneService = async (id) => {
    const res = await axios.delete(`${BASE_URL}/api/services/delete/${id}`, {
        headers: {"Authorization": `Bearer ${token}`}
    });

    return res.data;
}

// Portfolios

export const getPortfolios = async () => {
    const res = await axios.get(`${BASE_URL}/api/portfolios/get`);
    return res.data;
}

export const CreateOnePortfolio = async (data) => {
    const res = await axios.post(`${BASE_URL}/api/portfolios/create`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    })
    return res.data;
}

export const getOnePortfolio = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/portfolios/get/${id}`);
    return res.data;
}

export const UpdateOnePortfolio = async (id, data) => {
    const res = await axios.post(`${BASE_URL}/api/portfolios/update/${id}`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    });

    return res.data;
}

export const DeleteOnePortfolio = async (id) => {
    const res = await axios.delete(`${BASE_URL}/api/portfolios/delete/${id}`, {
        headers: {"Authorization": `Bearer ${token}`,}
    });

    return res.data;
}

// Social Accounts
export const getSocials = async () => {
    const res = await axios.get(`${BASE_URL}/api/socials/get`);
    return res.data;
}

export const CreateOneSocial = async (data) => {
    const res = await axios.post(`${BASE_URL}/api/socials/create`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    })
    return res.data;
}

export const getOneSocial = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/socials/get/${id}`);
    return res.data;
}

export const UpdateOneSocial = async (id, data) => {
    const res = await axios.post(`${BASE_URL}/api/socials/update/${id}`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    });

    return res.data;
}

export const DeleteOneSocial = async (id) => {
    const res = await axios.delete(`${BASE_URL}/api/socials/delete/${id}`, {
        headers: {"Authorization": `Bearer ${token}`,}
    });

    return res.data;
}

// Certificates

export const getCertificates = async () => {
    const res = await axios.get(`${BASE_URL}/api/certificates/get`);
    return res.data;
}

export const CreateOneCertificate = async (data) => {
    const res = await axios.post(`${BASE_URL}/api/certificates/create`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    })
    return res.data;
}

export const getOneCertificate = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/certificates/get/${id}`);
    return res.data;
}

export const UpdateOneCertificate = async (id, data) => {
    const res = await axios.post(`${BASE_URL}/api/certificates/update/${id}`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
    });

    return res.data;
}

export const DeleteOneCertificate = async (id) => {
    const res = await axios.delete(`${BASE_URL}/api/certificates/delete/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });

    return res.data;
}
