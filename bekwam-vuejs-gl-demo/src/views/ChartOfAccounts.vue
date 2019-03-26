<template>
  <div>
    <v-data-table :headers="headers" :items="accounts" item-key="accountId">
      <template v-slot:items="props">
        <tr
          :class="{'table-primary' : isSelected(props.item)}"
          :active="props.selected"
          @click="select(props.item)"
        >
          <td>{{ props.item.accountId }}</td>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.type }}</td>
        </tr>
      </template>
    </v-data-table>

    <v-dialog v-model="addDialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on">Add</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add Account</v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Account name*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Account id*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select :items="accountTypes" label="Account type*" required></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="addAccount">Save</v-btn>
          <v-btn color="secondary" flat @click="addDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="editDialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" :disabled="selected.length == 0">Edit</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Edit Account</v-card-title>

        <v-card-text>
          <v-form>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Account name*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Account id*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select :items="accountTypes" label="Account type*" required></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <small>*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="updateAccount">Save</v-btn>
          <v-btn color="secondary" flat @click="editDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn @click="deleteAccount(selected[0].accountId)" :disabled="selected.length == 0">Delete</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      selected: [],
      addDialog: false,
      editDialog: false,
      headers: [
        { text: "Account Id", value: "accountID", sortable: false },
        { text: "Name", value: "name" },
        { text: "Type", value: "type" }
      ]
    };
  },
  methods: {
    deleteAccount() {
      this.$store.dispatch("deleteAccount", this.selected[0].accountId);
      this.selected = [];
    },
    select(item) {
      this.selected = [];
      this.selected.push(item);
    },
    isSelected(item) {
      if (this.selected.length > 0) {
        return (
          this.selected.filter(itm => itm.accountId === item.accountId).length >
          0
        );
      }
      return false;
    },
    updateAccount() {
      editDialog = false;
    },
    addAccount() {
      addDialog = false;
    }
  },
  computed: {
    ...mapState(["accounts", "accountTypes"])
  }
};
</script>

<style>
.table-primary {
  background-color: #b8daff;
}
.theme--light.v-table tbody tr.table-primary:hover {
  background-color: #b8daff;
}
</style>