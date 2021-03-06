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
    <div class="row">
      <div class="col-10 pb-3">
        <b>Hashes:</b>
        <v-select
            multiple
            :options="hashList"
            v-model="hashesId"
            label="name"
            :reduce="name => name.id"
            @input="posts()"
        >
        </v-select>
      </div>
      <div class="col-2 pt-3">
        <span class="btn btn-success" @click="createLink()"><i class="fas fa-plus-circle"></i> Add</span>
      </div>
    </div>


    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in postList">
        <th scope="row">{{ post.id }}</th>
        <td>{{ post.title }}</td>
        <td @click="dropPost(post.id)"><i class="fas fa-trash-alt text-danger cursor"></i></td>
        <td><i class="fas fa-edit  text-info" @click="editLink(post.id)"></i></td>
        <td><i class="fas fa-eye" @click="showLink(post.slug)"></i></td>
      </tr>
      </tbody>
    </table>


    <div class="row pt-3">
      <div class="col-md-4 col-sm-12">
        <nav aria-label="Page navigation example" v-if="pagination.last_page>1">
          <ul class="pagination">
            <li class="page-item" v-if="pagination.current_page!==1">
                            <span class="page-link text-warning cursor"
                                  @click="fetchPaginationCost(pagination.prev_page_url)"
                                  :disabled="!pagination.prev_page_url">
                                <i class="fas fa-arrow-alt-circle-left"></i>
                            </span>
            </li>
            <li
                v-bind:class="[(pagination.current_page===link.label) ? paginateActiveClass : '',paginateDefaultClass]"
                v-for="(link, index) in pagination.links">
                            <span
                                class="page-link cursor"
                                v-if="link.label>0"
                                @click="fetchPaginationCost(link.url)">
                                {{ link.label }}
                            </span>
            </li>

            <li class="page-item" v-if="pagination.current_page!==pagination.last_page">
                            <span class="page-link text-warning cursor"
                                  @click="fetchPaginationCost(pagination.next_page_url)"
                                  :disabled="!pagination.next_page_url">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </span>
            </li>
          </ul>
        </nav>
      </div>

      <div class="col-md-4 col-sm-12">
        count of phrase : {{ pagination.total }}
      </div>

      <div class="col-md-4 col-sm-12">
        <label class="sr-only">count row</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">count row</div>
          </div>
          <select class="form-control" v-model="currentCountOfPage" @click="posts()">
            <option v-for="item in itemsCountOfPage">{{ item }}</option>
          </select>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import laravel_routers from "../../laravel_routers.js";

import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)

export default {
  props: [],
  name: 'PostIndexComponent',
  data: function () {
    return {
      //Notifications
      alertSuccess: false,
      alertError: false,
      messageError: [],
      messageSuccess: '',


      //Paginations
      paginateDefaultClass: 'page-item cursor',
      paginateActiveClass: 'page-item active cursor',
      pagination: [],
      url: laravel_routers('v1.api.post.index'),
      currentCountOfPage: 10,
      itemsCountOfPage: [10, 20, 30, 40, 50],

      //Variables
      hashesId: '',
      postList: [],
      hashList: []

    };
  },
  mounted() {
    this.posts();
    this.hashes()
  },

  methods: {

    //Post list
    posts() {
      var hashesId = (this.hashesId == null) ? '' : this.hashesId;
      axios.get(this.url, {
        params: {
          paginate: this.currentCountOfPage,
          hash: hashesId
        }
      })
          .then(response => {
            this.postList = response.data.data;
            this.pagination = response.data;
          });
    },

    //Hash list
    hashes() {
      axios.get(laravel_routers('v1.api.hash.index'))
          .then(response => {
            this.hashList = response.data.data;
          });
    },
    //Redirect to index
    createLink() {
      window.location.href = laravel_routers('post.create');
    },
    //Redirect to show
    showLink(id) {
      window.location.href = laravel_routers('post.show',id);
    },

    //Redirect to edit
    editLink(id) {
      window.location.href = laravel_routers('post.edit',id);
    },


    //Delete category
    dropPost(id) {
      this.alertSuccess = false;
      this.alertError = false;
      this.messageSuccess = '';
      this.messageError = '';
      if (confirm(this.confirmDelete)) {
        axios.delete(laravel_routers('v1.api.post.destroy', id))
            .then(response => {
              this.posts();
              this.alertSuccess = true;
              this.messageSuccess = 'Post was deleted';
            });
      }
    },

    //Pagination
    makePagination(data) {
      let pagination = {
        current_page: data.current_page,
        last_page: data.last_page,
        next_page_url: data.next_page_url,
        prev_page_url: prev_page_url,

      }

      this.pagination = pagination

    },

    fetchPaginationCost(url) {
      this.url = url;
      this.posts()
    }
  }
}
</script>
