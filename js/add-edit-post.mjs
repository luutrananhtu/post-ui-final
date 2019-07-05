import utils from "./utils.js";
import postApi from "./api/postApi.js";
import AppConstants from "./appConstants.js";



const handleFormSubmit = async () => {
    const formValue = getFormValue();
    const newPost = {
        ...formValue
    };

    await postApi.add(newPost);
    const editPageUrl = `add-edit-post.html?postId=${newPost.id}`;
    window.location = editPageUrl;
}


const handleChangeImageClick = () => {
    const randomId = 1 + Math.trunc(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/id/${randomId}/${AppConstants.DEFAULT_IMAGE_WIDTH}/${AppConstants.DEFAULT_IMAGE_HEIGHT}`;
    utils.setBackgroundImageByElementId('postHeroImage', imageUrl);
};

const getFormValue = () => {
    const formValue = {};

    const controlNameList = ['Title', 'Author', 'Description'];

    controlNameList.forEach(controlName => {
        const inputName = document.getElementById(`post${controlName}`);
        formValue[controlName.toLowerCase()] = inputName.value;
    })

    formValue.imageUrl = utils.getBackgroundImageByElementId('postHeroImage');
    return formValue;
}

const init = async () => {

    handleChangeImageClick();

    const postChangeImageButton = document.querySelector('#postChangeImage');
    if (postChangeImageButton) {
        postChangeImageButton.addEventListener('click', handleChangeImageClick);
    }

    const formSubmit = document.querySelector('#postForm');
    if (formSubmit) {
        formSubmit.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit();
        })
    }
}

init();