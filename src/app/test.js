
import { MongoClient } from 'mongodb';
import Home from './page';


const TestMongoDb = (props) => {
    return <Home meetups={props.meetups} />;
}


export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
        'mongodb+srv://admin:UDIT@cluster0.bckpbe5.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db('test');
    const meetupsCollection = db.collection('weeklytreadings');
    const meetups = await meetupsCollection.find().toArray();

    console.log(meetups,"Meetups");
    

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                description: meetup.description,
                day: meetup.day,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    };
}

export default TestMongoDb;

// experimental: {
//     serverComponentsExternalPackages: ["mongoose"],
// },