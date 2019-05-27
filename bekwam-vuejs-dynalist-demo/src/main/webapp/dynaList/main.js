const app = new Vue({
  el: "#app",
  data: {
    linkToAdd: null,
    linkSeq: 1,
    links: [],
    pendingDeletions: [],
    dirty: false,
    selectedLinkId: null
  },
  template: `
    <div>
      <h1>Dynamic List Demo</h1>
      <p>Changes to the list won't be saved until you press "Save".</p>
      <ul>
        <li v-for="(link,index) in links" :key="getLinkId(link)">
          <div class="link-box">
            <div v-if="getLinkId(link) != selectedLinkId" @click="selectLink(getLinkId(link))">{{ link.linkHref }}</div>
            <input v-if="getLinkId(link) == selectedLinkId" type="text" :value="link.linkHref" @change="editLink(link, index, $event)"   />
          </div>
          <button @click="deleteLink(link)">-</button>
          <button :disabled="index < 1" @click="moveUp(index)">&uarr;</button>
          <button :disabled="index > (links.length-2)" @click="moveDown(index)">&darr;</button>
        </li>
        <li>
          <div class="link-box">
            <input id="linkToAdd" type="text" v-model="linkToAdd" />
          </div>
          <button :disabled="!linkToAdd" @click="addLink">+</button>
        </li>
        <hr>
        <li>
          <div class="link-box">&nbsp;</div>
          <button :disabled="!dirty" :class="{ go : dirty }" @click="save">Save</button>
          <button :disabled="!dirty" @click="revert">Revert</button>
        </li>    
      </ul>
    </div>
    `,
    methods: {
      selectLink(linkId) {
        this.selectedLinkId = linkId;
      },
      addLink() {     
        this.dirty = true;
        this.links.push({ tempId: this.linkSeq++, linkHref: this.linkToAdd });
        this.linkToAdd = null;
      },
      editLink(link, index, $event) {
        this.dirty = true;
        link.linkHref = $event.target.value;
        Vue.set(this.links, index, link);
      },
      deleteLink(toDelete) {
        this.dirty = true;
        if( toDelete.tempId ) {
          this.links = this.links.filter( link => link.tempId != toDelete.tempId );
        } else {
          this.pendingDeletions.push( toDelete );
          this.links = this.links.filter( link => link.linkId != toDelete.linkId );
        }
      },
      moveUp(index) {
        this.dirty = true;
        let tmp = this.links[index];
        Vue.set(this.links, index, this.links[index-1]);
        Vue.set(this.links, index-1, tmp);
      },
      moveDown(index) {
        this.dirty = true;
        let tmp = this.links[index];
        Vue.set(this.links, index, this.links[index+1]);
        Vue.set(this.links, index+1, tmp);
      },
      save() {

        let sort = 1;
        this.links.forEach( link => {
          link.linkSort = sort++;
          if( link.tempId ) {
            axios
            .post( 
              "http://localhost:8080/vuejs-demo/api/links",
              link
              )
            .then( response => {
              link.linkId = response.data.linkId;
              delete link.tempId 
            })
            .catch( error => console.error("error calling POST /links; " + error));
          } else {
            axios
            .put( 
              "http://localhost:8080/vuejs-demo/api/links/" + link.linkId,
              link
              )
            .catch( error => console.error("error calling PUT /links; " + error));
          }
        });

        this.pendingDeletions.forEach( toDelete => {
          axios
          .delete( 
            "http://localhost:8080/vuejs-demo/api/links/" + toDelete.linkId
            )
          .catch( error => console.error("error calling DELETE /links; " + error));
        });

        this.pendingDeletions = [];
        this.selectedLink = null;
        this.dirty = false;
      },
      revert() {
        this.fetchAll();
        this.dirty = false;
      },
      getLinkId: (link) => ((typeof link.tempId!=="undefined")?link.tempId:"0") + "-" + 
        ((typeof link.linkId!=="undefined")?link.linkId:"0"),
      fetchAll() {
        axios
        .get("http://localhost:8080/vuejs-demo/api/links")
        .then( response => this.links = response.data )
        .catch( error => console.error("error calling GET /links; " + error));
      }
    },
    created() {
      this.fetchAll();
    }
});

