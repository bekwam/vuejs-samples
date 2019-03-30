<template>
  <div>
    <v-container ref="mycontainer">
      <v-layout row pa-1>
        <v-flex xs12>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Transaction Date"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12>&nbsp;</v-flex>
        <v-flex xs12>&nbsp;</v-flex>
        <v-flex xs12>&nbsp;</v-flex>
        <v-flex xs12>&nbsp;</v-flex>
        <v-flex xs12>&nbsp;</v-flex>
      </v-layout>
      <v-layout row pa-1>
        <v-flex xs12>&nbsp;</v-flex>
        <v-flex xs12>Account</v-flex>
        <v-flex xs12>Memo</v-flex>
        <v-flex xs12>Debit</v-flex>
        <v-flex xs12>Credit</v-flex>
        <v-flex xs12>&nbsp;</v-flex>
      </v-layout>

      <v-layout row pa-1 ref="myhr">
        <v-flex>
          <hr>
        </v-flex>
      </v-layout>

      <v-layout row pa-1>
        <v-flex xs12>Total</v-flex>
        <v-flex xs12>&nbsp;</v-flex>
        <v-flex xs12 mr-1>
          <v-text-field single-line outline readonly></v-text-field>
        </v-flex>
        <v-flex xs12 mr-1>
          <v-text-field single-line outline readonly></v-text-field>
        </v-flex>
        <v-flex xs12>&nbsp;</v-flex>
      </v-layout>

      <v-btn @click="addJE(jeId++)">Add Entry</v-btn>
      <v-btn>Save</v-btn>
      <v-btn>Cancel</v-btn>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import JournalEntry from "@/components/JournalEntry";

export default {
  data() {
    return {
      jeId: 1,
      journalEntries: [],
      menu2: false,
      date: null
    };
  },
  components: {
    JournalEntry
  },
  created() {
    this.$root.$on("remove-je-event", this.removeJE);
  },
  mounted() {
    this.addJE(this.jeId++);
    this.addJE(this.jeId++);
  },
  methods: {
    addJE(id) {
      let Clazz = Vue.extend(JournalEntry);
      let je = new Clazz({
        propsData: { id: id },
        parent: this
      });
      je.$mount();
      this.$refs.mycontainer.insertBefore(je.$el, this.$refs.myhr);
    },
    removeJE(jeId) {
      let component = this.$children.find(child => child.jeId === jeId);
      if (component) {
        this.$refs.mycontainer.removeChild(component.$el);
        component.$destroy();
      }
    }
  }
};
</script>
