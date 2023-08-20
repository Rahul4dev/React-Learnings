import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Next Meetup</title>
        <meta
          name="description"
          content="Browse a list of next meetups ahead in the future. It is highly active and most popular among developers and designers. "
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  const MONGODB_URI = process.env.MONGODB_URI;

  const client = await MongoClient.connect(`${MONGODB_URI}`);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
