import MeetupDetail from '@/components/meetups/MeetupDetail';

const MeetupDetails = async ({ params }) => {
  const meetupData = await getStaticProps();
  const singleMeetupData = meetupData.props.meetupData;
  console.log(params);
  return (
    <MeetupDetail
      image={singleMeetupData.image}
      id={params.meetupId}
      title={singleMeetupData.title}
      address={singleMeetupData.address}
      description={singleMeetupData.description}
    />
  );
};

// export async function generateStaticParams() {
//   // get data from API/ fetch single meetup Ids

//   return [{ meetupId: 'm1' }, { meetupId: 'm2' }];
// }

export const getStaticProps = async (params) => {
  // fetch data for single meetup
  console.log(params);

  return {
    props: {
      meetupData: {
        image:
          'https://images.unsplash.com/photo-1660834772989-c15d049c35d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        // id: params.meetupId,
        title: 'A First Meetup',
        address: 'Some Street, SR Colony, Hangout City',
        description: 'The meetup Description',
      },
    },
  };
};

export default MeetupDetails;
