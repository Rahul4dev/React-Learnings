import styles from './page.module.css';
import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUP = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://images.unsplash.com/photo-1660834772989-c15d049c35d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'some address, 123SR Street, HangOut City',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://images.unsplash.com/photo-1684576069958-22c2adb77d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'next address, 123SR Street, Same City',
  },
  {
    id: 'm3',
    title: 'A Last Meetup',
    image:
      'https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80',
    address: 'last address, 123SR Street, Another City',
  },
];

// function Home(props) {
//   const [loadedMeetups, setLoadedMeetups] = useState([]);

//   useEffect(() => {
//     // send request, get data and load the meetups
//     setLoadedMeetups(DUMMY_MEETUP);
//   }, []);
//   return (
//     <div className={styles.description}>
//       <MeetupList meetups={loadedMeetups} />
//     </div>
//   );
// }
async function Page() {
  const meetups = await getStaticProps();
  // const meetups = await getServerSideProps();
  return (
    <div className={styles.description}>
      <MeetupList meetups={meetups.props.meetups} />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // this props is used for fetching data for server side rendering and it hydrate the data on every request.

//   // it also give access to context object which contains request and response properties which can be used for other features like authentication, validation, etc.
//   // const request = context.req;
//   // const response = context.res;
//   // console.log(request, response);
//   // fetch data from server/api
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
    revalidate: 10, // update on every 10 seconds.
  };
}

export default Page;
