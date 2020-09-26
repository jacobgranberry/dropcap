import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '../components/layouts/dashboardLayout/dashboardLayout';
import { useAuth } from '../utils/hooks/useAuth';
import { useRouter } from 'next/router';
import Popup from 'reactjs-popup';
import { FirstTimeUserFlow } from '../components/flows/firstTimeUserFlow';
import { ModalLayout } from '../components/layouts/modalLayout';
import { BookCard } from '../components/molecules/bookCard';
import { Box } from 'rebass';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      <Box maxWidth={480}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <BookCard
              bookImage="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg"
              bookTitle="The Way Of Kings"
              bookAuthor="Brandon Sanderson"
              bookSynopsis="According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BookCard
              bookImage="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg"
              bookTitle="The Way Of Kings"
              bookAuthor="Brandon Sanderson"
              bookSynopsis="According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BookCard
              bookImage="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg"
              bookTitle="The Way Of Kings"
              bookAuthor="Brandon Sanderson"
              bookSynopsis="According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BookCard
              bookImage="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg"
              bookTitle="The Way Of Kings"
              bookAuthor="Brandon Sanderson"
              bookSynopsis="According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BookCard
              bookImage="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg"
              bookTitle="The Way Of Kings"
              bookAuthor="Brandon Sanderson"
              bookSynopsis="According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed..."
            />
          </SwiperSlide>
        </Swiper>
      </Box>
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
