<template>
  <div>
    <div class="row align-items-center">
      <div class="col">
        <h1>Person List</h1>
      </div>
      <div class="col col-lg-3">
        <div class="row">
          <div class="col">
            <button class="btn btn-secondary" @click="popup('add')">Add</button>
          </div>
          <div class="col">
            <button
              class="btn btn-secondary"
              @click="popup('edit')"
              :disabled="this.$store.getters.selectedPerson.id == -1"
            >Edit</button>
          </div>
          <div class="col">
            <button
              class="btn btn-secondary"
              @click="deleteRow"
              :disabled="this.$store.getters.selectedPerson.id == -1"
            >Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name (Job Title)</th>
              <th scope="col">Age</th>
              <th scope="col">Nickname</th>
              <th scope="col">Employee</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="person in this.$store.getters.persons"
              :key="person.id"
              @click="selectRow(person)"
              :class="{'table-primary' : isSelected(person.id)}"
            >
              <td scope="row">
                {{ person.name }}
                <span v-if="person.jobTitle != ''">({{ person.jobTitle }})</span>
              </td>
              <td>{{ person.age }}</td>
              <td>{{ person.nickname }}</td>
              <td>{{ person.employee }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";
import "jquery/dist/jquery.min.js";
import { createEmptyPerson } from "@/utils.js";

import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "PersonList",
  methods: {
    selectRow(p) {
      this.$store.dispatch("selectPerson", p);
    },
    isSelected(id) {
      return id == this.$store.getters.selectedPerson.id;
    },
    deleteRow() {
      this.$store.dispatch(
        "deletePerson",
        this.$store.getters.selectedPerson.id
      );
    },
    popup(action) {
      if (action === "add") {
        this.$store.dispatch("selectPerson", createEmptyPerson());
      }

      $("#exampleModal").modal();
    }
  }
};
</script>
