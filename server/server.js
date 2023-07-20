import express from'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js'
import bodyParser from 'body-parser';
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const supabase = createClient('https://zhzkrwqjvkuftwrmdoez.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpoemtyd3Fqdmt1ZnR3cm1kb2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxNTc3MDIsImV4cCI6MjAwNDczMzcwMn0.MbAjUGPqxr5I3OPvKyaPSIh9RrA4zO0bZ23MNrRk6ds')


app.get("/api/lessons", async(req,res) => {
    const {data, error} = await supabase
    .from('lessons')
    .select('*')
    res.json(data)
})


app.listen(5000, () => {console.log("Server is up on port 5000")});