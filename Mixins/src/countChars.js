
export const charCount = {
  data() {
    return  {
      person: "Bill"
    }
  },
  computed: {
    giveCount() {
      return `${this.person} (${this.person.length})`
    }
  }
}