import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '../components/layouts/dashboardLayout/dashboardLayout';
import { useAuth } from '../utils/hooks/useAuth';
import { useRouter } from 'next/router';
import Popup from 'reactjs-popup';
import { FirstTimeUserFlow } from '../components/flows/firstTimeUserFlow';
import { ModalLayout } from '../components/layouts/modalLayout';
import { BookCard } from '../components/molecules/bookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mockBooks } from '../utils/mockData/books';

const Dashboard = (): JSX.Element => {
  const auth = useAuth();
  const router = useRouter();
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push('/');
    }
  }, [auth, router]);

  // Determine if the user hasn't filled out their profile
  // By checking if displayName exists or not
  useEffect(() => {
    if (auth.user && !auth.user.displayName) {
      setIsFirstTimeUser(true);
    }
  }, [auth, setIsFirstTimeUser]);

  return (
    <DashboardLayout>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {mockBooks.map((book) => (
          <SwiperSlide key={book.bookTitle}>
            <BookCard
              bookImage={book.bookImage}
              bookTitle={book.bookTitle}
              bookAuthor={book.bookAuthor}
              bookSynopsis={book.bookSynopsis}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isFirstTimeUser && (
        <Popup trigger={<button className="button"> Open Modal </button>} modal nested>
          {() => (
            <ModalLayout headerLabel="First Time User Flow">
              <FirstTimeUserFlow />
            </ModalLayout>
          )}
        </Popup>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
