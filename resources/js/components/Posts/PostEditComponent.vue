<template>
  <div class="container">
    <div class="row">
      <div class="col-12 alert alert-success alert-dismissible" v-if="alertSuccess===true">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        {{ messageSuccess }}
      </div>

      <div class="alert alert-danger alert-dismissible" v-if="alertError===true">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <ul>
          <li v-for="error in messageError">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
    <span class="btn badge-info" @click="indexLink()"><i class="fas fa-arrow-left"></i> Back</span>
    <h1 class="text-center">Edit post</h1>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="title" placeholder="Enter title">
        </div>
        <div class="form-group">
          <label for="hash">Hashes</label> <span class="text-success" v-if="buttonAddHash" @click="addHash()"><i
            class="fas fa-plus-circle"></i></span>

          <div class="row" v-if="formAddHash">
            <div class="col-12 col-md-4">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter name hash" v-model="hashName">
              </div>
            </div>

            <div class="col-12 col-md-8">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter url hash" aria-label="Recipient's username"
                       aria-describedby="button-addon2" v-model="hashSlug">
                <div class="input-group-append">
                  <span class="btn btn-outline-danger" type="button" id="button-addon2"
                        @click="cancelHash()">Cancel</span>
                </div>
                <div class="input-group-append">
                  <span class="btn btn-outline-success" type="button" id="button-addon3"
                        @click="storeHash()">Save</span>
                </div>
              </div>
            </div>
          </div>


          <select multiple class="form-control" id="hash" v-model="hash">
            <option v-for="item in hashList" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <span>Text</span>
          <vue-editor v-model="text"></vue-editor>
        </div>
      </div>

    </div>
    <span class="btn btn-success btn-block" @click="storePost()">Save</span>
  </div>
</template>

<script>
import axios from "axios";
import laravel_routers from "../../laravel_routers.js";

export default {
  props: ['id'],
  name: 'PostEditComponent',
  data: function () {
    return {
      postSuccessCreate: 'Post was created',
      hashSuccessCreate: 'Hash was created',
      //Notifications
      alertSuccess: false,
      alertError: false,
      messageError: [],
      messageSuccess: '',


      //Variables
      hash: [],
      text: '',
      hashList: [],
      title: '',
      hashName: '',
      hashSlug: '',
      buttonAddHash: true,
      formAddHash: false,
      idPost: this.id,
      post:[]

    };
  },
  mounted() {
    this.hashes();
    this.getPost()
  },

  methods: {
    //Hash list
    hashes() {
      axios.get(laravel_routers('v1.api.hash.index'))
          .then(response => {
            this.hashList = response.data.data;
          });
    },

    //Post
    getPost() {
      axios.get(laravel_routers('v1.api.post.show', this.idPost))
          .then(response => {
            this.post = response.data.data[0];

            this.title=response.data.data[0].title;
            this.text=response.data.data[0].text;

          });
    },

    //update post
    updatePost() {
      axios.put(laravel_routers('v1.api.post.update',this.id), {
        title: this.title,
        text: this.text,
        hash: this.hash
      })
          .then((response) => {
            console.log(response.data.data.message_error);
            if (response.data.data.message_error) {
              this.messageError = response.data.data;
              this.alertError = true;
              this.alertSuccess = false;
            } else {
              this.messageSuccess = this.postSuccessCreate;
              this.alertSuccess = true;
              this.alertError = false;
            }
            this.title = '';
            this.text = '';
            this.hash = '';

          })
          .catch(error => {

            this.messageError = error.response.data.errors;
            this.alertSuccess = false;
            this.alertError = true;
            window.scrollTo(0, 0);
            this.loaderIsLoading = false;
          });
    },

    //create new hash
    storeHash() {
      axios.post(laravel_routers('v1.api.hash.store'), {
        name: this.hashName,
        slug: this.hashSlug,

      })
          .then((response) => {
            console.log(response.data.data.message_error);
            if (response.data.data.message_error) {
              this.messageError = response.data.data;
              this.alertError = true;
              this.alertSuccess = false;
            } else {
              this.messageSuccess = this.hashSuccessCreate;
              this.alertSuccess = true;
              this.alertError = false;
            }
            this.hashes();
            this.buttonAddHash = false;
            this.formAddHash = true;
            this.hashName = '';
            this.hashSlug = ''
          })
          .catch(error => {

            this.messageError = error.response.data.errors;
            this.alertSuccess = false;
            this.alertError = true;
            window.scrollTo(0, 0);
            this.loaderIsLoading = false;
          });
    },

    //Redirect to index
    indexLink() {
      window.location.href = laravel_routers('post.index');
    },
    //click on the button add hash
    addHash() {
      this.buttonAddHash = false;
      this.formAddHash = true
    },

    //click on the button cancel hash
    cancelHash() {
      this.buttonAddHash = true;
      this.formAddHash = false
    }
  }
}
</script>
