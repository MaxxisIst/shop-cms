import { form, preview } from "./elems.js";
import { toBase64 } from "./utils.js";

export const showPreview = (src) => {
    preview.style.display = 'block';
    preview.src = src;
};
export const hidePreview = (src) => {
    preview.style.display = '';
    preview.src = '';
};

export const previewController = () => {
    const imageFile = form.image;
    image.addEventListener('change', async () => {
        if (imageFile.files.length) {
            //without async await
            // toBase64(imageFile.files[0]).then(src => showPreview(src));
            const src = await toBase64(imageFile.files[0]);
            showPreview(src);
        }
    });
};