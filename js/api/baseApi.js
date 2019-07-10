import fetchClient from './fetchClient.js';
import AppConstants from '../appConstants.js';

export default class BaseApi {
  getResourceName() {
    throw new Error('Please implement this method');
  }



  getAll(limit) {
    let url = '';
    if (limit) {
      url = `${AppConstants.API_URL}/${this.getResourceName()}?${limit}`;
    } else {
      url = `${AppConstants.API_URL}/${this.getResourceName()}`;
    }

    return fetchClient.get(url);

  }

  getDetail(postId) {
    const url = `${AppConstants.API_URL}/${this.getResourceName()}/${postId}`;
    return fetchClient.get(url);
  }

  add(post) {
    const url = `${AppConstants.API_URL}/${this.getResourceName()}`;
    return fetchClient.post(url, post);
  }

  update(post) {
    const url = `${AppConstants.API_URL}/${this.getResourceName()}/${post.id}`;
    return fetchClient.patch(url, post);
  }

  remove(postId) {
    const url = `${AppConstants.API_URL}/${this.getResourceName()}/${postId}`;
    return fetchClient.delete(url);
  }
}