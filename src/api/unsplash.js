import axios from 'axios'

// Creates an object to export
export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers:{Authorization : 'Client-ID b6da80fb44212d02afbc95a0dae03d2ee4310654f2a188e2182d852465783281'},
});
