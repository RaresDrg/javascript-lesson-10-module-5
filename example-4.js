/*Example 4 - Notes

Write a `Notes` class that manages the collection of notes in the `items` property.
A note is an object with `text` and `priority` properties. Add a static
property `Priority` to the class, which will store the object with priorities.

Add methodsaddNote(note), removeNote(text) and updatePriority(text, newPriority).
*/

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  constructor(arr) {
    this.items = arr;
  }

  addNote(note) {
    this.items.push(note)
  }

  removeNote(text) {
    const removeNoteIndex = this.items.findIndex((note) => {
      return note.text === text
    });

    if (removeNoteIndex === -1) {
      return console.log(`Note that contains text: "${text}" is not in the collection`)
    }

    this.items.splice(removeNoteIndex, 1)

    // const removeNote = this.items.find((note) => {
    //   return note.text === text;
    // })

    // if (removeNote) {
    //   const removeNoteIndex = this.items.indexOf(removeNote);
    //   this.items.splice(removeNoteIndex, 1);
    //   return
    // }

    // if (!removeNote) {
    //   return console.log(`Note that contains text: "${text}" is not in the collection`)
    // }
  }

  updateNote(text, newPriority) {
    const updateNote = this.items.find((note) => {
      return note.text === text;
    })

    if (updateNote) {
      updateNote.priority = newPriority
      return
    }
    
    console.log(`Note that contains text: "${text}" is not in the collection`);

    // const index = this.items.findIndex((el) => el.text === text);
    // if (index === -1) {
    //   console.log("Nu exista nota cu acest text");
    //   return;
    // }
    // this.items[index].priority = newPriority;
  }
}


const myNotes = new Notes([]);
console.log(myNotes)

myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: "My second note",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote("My first note");
console.log(myNotes.items);

myNotes.updateNote("My second note", Notes.Priority.HIGH);
console.log(myNotes.items);