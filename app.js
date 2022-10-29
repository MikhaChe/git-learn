const App = {
    data () {
        return {
            placeholderString: 'Please enter the title of the note',
            title: 'To does',
            inputValue: '',
            noteArc: ["Notes 1", "Notes 2"]
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },

        addNewNote() {
            if(this.inputValue !== '') {
                this.noteArc.push(this.inputValue);
                this.inputValue = '';
            }           
        },

        removeNote(idx) {
            this.noteArc.splice(idx, 1);
        }

    }
}

const app = Vue.createApp(App);

app.mount('#app');