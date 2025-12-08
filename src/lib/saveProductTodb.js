
import api from './axios';

const saveProductTodb = async (data) => {
    try {
        await api.post("/product", {
            ...data
        })
    }
    catch (err) {
        console.log("Axios error", err)
        throw err
    }
};

export default saveProductTodb;