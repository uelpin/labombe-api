import app from './app';

app.listen(process.env.PORT || 8152, () => {
    console.log('Successfully connected!')
});