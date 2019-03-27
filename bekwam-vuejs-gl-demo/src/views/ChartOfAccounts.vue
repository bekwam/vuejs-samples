<template>
  <div>
    {{ accounts[1].name }}
    <v-data-table :headers="headers" :items="accounts" item-key="accountId">
      <template v-slot:items="props">
        <tr :class="{'table-primary' : isSelected(props.item)}" @click="select(props.item)">
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
                <v-text-field label="Account name*" required v-model="selected.name"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Account id*" required v-model="selected.accountId"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="accountTypes"
                  label="Account type*"
                  required
                  v-model="selected.type"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="saveAccount(true)">Save</v-btn>
          <v-btn color="secondary" flat @click="hideAddDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="editDialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" :disabled="selected.accountId === -1">Edit</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Edit Account</v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Account name*" required v-model="selected.name"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Account id*" required v-model="selected.accountId"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="accountTypes"
                  label="Account type*"
                  required
                  v-model="selected.type"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="saveAccount(false)">Save</v-btn>
          <v-btn color="secondary" flat @click="hideEditDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn @click="deleteAccount(selected.accountId)" :disabled="selected.accountId === -1">Delete</v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";

function createTemplateAccount() {
  return {
    accountId: -1,
    name: "New account",
    type: "Asset"
  };
}

export default {
  data() {
    return {
      selected: createTemplateAccount(),
      selectedType: null,
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
      this.$store.dispatch("deleteAccount", this.selected.accountId);
      this.selected = createTemplateAccount();
    },
    select(item) {
      this.selected = item;
    },
    isSelected(item) {
      return this.selected.accountId === item.accountId;
    },
    saveAccount(isNew) {
      const a = {
        accountId: this.selected.accountId,
        name: this.selected.name,
        type: this.selected.type
      };

      if (isNew) {
        this.$store.dispatch("addAccount", a);
      } else {
        this.$store.dispatch("updateAccount", a);
      }

      if (isNew) {
        this.addDialog = false;
      } else {
        this.editDialog = false;
      }
    },
    hideAddDialog() {
      this.addDialog = false;
      this.selected = createTemplateAccount();
    },
    hideEditDialog() {
      this.editDialog = false;
      this.selected = createTemplateAccount();
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