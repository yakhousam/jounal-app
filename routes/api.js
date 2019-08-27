const router = require('express').Router();
const Journal = require('../models/journal')


router.get("/api/getListeNotes/", async (req, res) => {
  const userId = req.user._id
  let query = req.query;
  if(!query.date || query.date === 'month'){
    const date = new Date();
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const queryDate = new Date(`${year}-${month}-01`);
    query.date = {date_create: {$gt: queryDate}}
   
  }
  if(query.date === 'day'){
    const dt = new Date();
    const month = dt.getMonth() + 1
    const year = dt.getFullYear()
    const day = dt.getDate()
    
    const queryDate = new Date(`${year}-${month}-${day}`);
    query.date = {date_create: {$gt: queryDate}}
   
  }
  if(query.date === 'all'){
    query.date={date_create: {$gte: new Date('1970-01-01')}}
   
  }
  if(query.dateCalendar){
    const dts = new Date(query.dateCalendar)
    let dte = new Date(query.dateCalendar)
    dte.setDate(dte.getDate() + 1);

    query.date={date_create: {$gte: dts, $lt: dte}}
   
  }
  if(!query.title) {
    console.log("query !!!!!!!! ", query)
    req.query = query.date
     console.log("query !!!!!!!! ", query)
  }else{
    delete req.query.date
  }
 
  try {
    const filter = {userId, ...req.query}
    // const filter ={}
    console.log('----------------------------------------------------------------------------------')
    console.log('getlistNotes filter =', filter)
    const notes = await Journal.find(filter).sort({date_create: -1})
    // console.log('user id=', id)
    // console.log('getListeNotes =', notes)
   
    res.json( notes.map(note=>{
      if(note.text.length>50) note.text = note.text.slice(0, 50) + '...';
      return note;
    }))
  } catch (error) {
    console.error(error)
    res.json(error)
  }
});
router.get("/api/getNote/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Journal.findById(id)
    res.json(note)
  } catch (error) {
   console.error(error) ;
   res.json(error)
  }
});
router.get("/api/getNotesTitles", async (req, res) => {
  const userId = req.user._id
  try {
    const titles = await Journal.find({userId},{'_id': 0, 'title': 1})
    // // console.log('api titles =', titles)
    res.json(titles)
  } catch (error) {
    console.error(error)
    res.json(error)
  }
});
router.post("/api/addNote", async (req, res) => {
  const { title, text } = req.body;
  const userId = req.user._id
  try {
    const newNote = await Journal.create({title, text, userId})
    const note = await newNote.save()
    res.json({noteId: note._id})
  } catch (error) {
    console.error(error)
    res.json(error)
  }
});
// delete note
router.get('/api/deleteNote/:noteId', async (req, res) =>{
  const noteId = req.params.noteId;
  try {
    const note = await Journal.findByIdAndDelete(noteId)
    // console.log('delete note =', note)
    res.json({noteId: note._id})
  } catch (error) {
    console.error(error)
    res.json(error)
  }
})

router.post('/api/updateNote', async (req, res) =>{
  const {noteId, title, text} = req.body;
 try {
  const note = await Journal.findByIdAndUpdate(noteId, {title, text})
  console.log('update note ----------=', note)
  res.json({noteId: note._id})
 } catch (error) {
   console.error(error);
   res.json(error)
 }
})

module.exports = router;