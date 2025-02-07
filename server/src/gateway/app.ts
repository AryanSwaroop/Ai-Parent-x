import express from 'express';
import user from '../Security/JWT/routes/user.route';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user" , user);

app.listen(3000, () => {
    console.log('Server is running on 3000');
})