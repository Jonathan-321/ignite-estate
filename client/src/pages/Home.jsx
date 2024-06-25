import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { ArrowRight, House, DollarSign, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchListings = async (type, limit, setter) => {
      try {
        const res = await fetch(`/api/listing/get?${type}&limit=${limit}`);
        const data = await res.json();
        setter(data);
      } catch (error) {
        console.error(`Error fetching ${type} listings:`, error);
      }
    };

    fetchListings('offer=true', 4, setOfferListings);
    fetchListings('type=rent', 4, setRentListings);
    fetchListings('type=sale', 4, setSaleListings);
  }, []);

  const ListingSection = ({ title, listings, linkText, linkTo }) => (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-slate-700">{title}</h2>
        <Link to={linkTo} className="text-blue-600 hover:underline flex items-center">
          {linkText} <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
      {listings && listings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {listings.map((listing) => (
            <ListingItem listing={listing} key={listing._id} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No listings available at the moment.</p>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-700">
            Find your next <span className="text-blue-600">perfect</span> place
          </h1>
          <p className="mt-2 text-gray-600">
            Discover a wide range of properties tailored to your needs.
          </p>
          <Link
            to="/search"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Start Your Search
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {offerListings && offerListings.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="mb-12 rounded-lg overflow-hidden"
          >
            {offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center/cover no-repeat`,
                  }}
                  className="h-[400px] sm:h-[500px]"
                >
                  <div className="bg-black bg-opacity-30 h-full flex items-end">
                    <div className="text-white p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{listing.name}</h3>
                      <p className="text-sm sm:text-base">{listing.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <House className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Wide Selection</h3>
              <p className="text-gray-600">Find the perfect property from our extensive listings</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <DollarSign className="w-12 h-12 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Best Deals</h3>
              <p className="text-gray-600">Discover great offers and discounts</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <TrendingUp className="w-12 h-12 text-orange-600 mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Market Insights</h3>
              <p className="text-gray-600">Stay informed with the latest real estate trends</p>
            </div>
          </div>
        </div>

        <ListingSection
          title="Latest Offers"
          listings={offerListings}
          linkText="View all offers"
          linkTo="/search?offer=true"
        />
        <ListingSection
          title="Places for Rent"
          listings={rentListings}
          linkText="View all rentals"
          linkTo="/search?type=rent"
        />
        <ListingSection
          title="Properties for Sale"
          listings={saleListings}
          linkText="View all properties"
          linkTo="/search?type=sale"
        />
      </main>
    </div>
  );
}