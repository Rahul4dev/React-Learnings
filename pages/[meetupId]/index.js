import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

export default function MeetupDetails(props) {
  const meetupData = props.meetupData;
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        description={meetupData.description}
        address={meetupData.address}
        id={meetupData._id}
      />
    </>
  );
}

export async function getStaticPaths() {
  // API call to get the id for the path.
  const MONGODB_URI = process.env.MONGODB_URI;

  const client = await MongoClient.connect(`${MONGODB_URI}`);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: true,
    paths: meetupIds.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // fetch data for a single meetup
  const MONGODB_URI = process.env.MONGODB_URI;

  const client = await MongoClient.connect(`${MONGODB_URI}`);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
