  <template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <form>
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Person Details Popup</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <fieldset>
              <input type="hidden" id="id" :value="selectedPerson.id">

              <div class="form-group">
                <label for="name">Name</label>
                <input class="form-control" type="text" id="name" :value="selectedPerson.name">
              </div>

              <div class="form-group">
                <label for="nickname">NickName</label>
                <input
                  class="form-control"
                  type="text"
                  id="nickname"
                  :value="selectedPerson.nickname"
                >
              </div>

              <div class="form-group">
                <label for="jobTitle">Job Title</label>
                <input
                  class="form-control"
                  type="text"
                  id="jobTitle"
                  :value="selectedPerson.jobTitle"
                >
              </div>
              <div class="form-group">
                <label for="Age">Age</label>
                <input class="form-control" type="text" id="age" :value="selectedPerson.age">
              </div>
              <div class="form-group form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="employee"
                  :checked="selectedPerson.employee"
                >
                <label class="form-check-label" for="Employee">Employee</label>
              </div>
            </fieldset>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="savePerson"
              data-dismiss="modal"
            >Save</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PersonDetails",
  methods: {
    savePerson(event) {
      let id = event.target.form["id"].value;

      const p = {
        id: id,
        name: event.target.form["name"].value,
        nickname: event.target.form["nickname"].value,
        jobTitle: event.target.form["jobTitle"].value,
        age: event.target.form["age"].value,
        employee: event.target.form["employee"].checked
      };

      if (id == -1) {
        this.$store.dispatch("addPerson", p);
      } else {
        this.$store.dispatch("updatePerson", p);
      }
    }
  },
  computed: {
    ...mapState({
      selectedPerson: state => state.selectedPerson
    })
  }
};
</script>
