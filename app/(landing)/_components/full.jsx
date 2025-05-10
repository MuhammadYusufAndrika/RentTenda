'use client';
import { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import Image from 'next/image'

export default function Full() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    alert('Pesan Anda telah dikirim!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">GlamTent</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600">About Us</a>
            <a href="#product" className="text-gray-700 hover:text-purple-600">Produk</a>
            <a href="#gallery" className="text-gray-700 hover:text-purple-600">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Wujudkan Pernikahan Impian Anda</h1>
            <p className="text-lg text-gray-700 mb-6">
              Kami menyediakan berbagai pilihan tenda pernikahan berkualitas untuk momen spesial Anda
            </p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
              Lihat Paket Kami
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/aaa.jpg" 
              alt="Tenda pernikahan" 
              width={900}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tentang Kami</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
              src="/images/aaa.jpg" 
              alt="Tenda pernikahan" 
              width={900}
              height={200}
              className="rounded-lg shadow-lg"
                />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Mengapa memilih GlamTent?</h3>
              <p className="text-gray-700 mb-6">
                GlamTent adalah penyedia jasa sewa tenda pernikahan terpercaya dengan pengalaman lebih dari 10 tahun. 
                Kami menyediakan berbagai pilihan tenda berkualitas tinggi dengan desain elegan untuk mewujudkan 
                pernikahan impian Anda.
              </p>
              <p className="text-gray-700 mb-6">
                Tim profesional kami siap memberikan pelayanan terbaik mulai dari konsultasi, pemasangan hingga 
                pembongkaran tenda. Kami memastikan setiap detail sempurna untuk hari istimewa Anda.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Pelayanan Profesional</h4>
                  <p className="text-sm text-gray-600">Tim berpengalaman yang siap membantu acara Anda</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Produk Berkualitas</h4>
                  <p className="text-sm text-gray-600">Tenda dan dekorasi premium untuk momen spesial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="product" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Paket Tenda Pernikahan</h2>
          <p className="text-center text-gray-700 mb-12">Berbagai pilihan paket untuk kebutuhan acara Anda</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Paket 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
              src="/images/aaa.jpg" 
              alt="Tenda pernikahan" 
              width={900}
              height={200}
              className="rounded-lg shadow-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">PAKET STANDARD</h3>
                <p className="text-sm text-gray-600 mb-3">Tenda ukuran 5x10m, kapasitas 100 tamu</p>
                <ul className="text-sm text-gray-700 mb-4">
                  <li className="mb-1">• Tenda semi dekor</li>
                  <li className="mb-1">• 10 meja bundar + taplak</li>
                  <li className="mb-1">• 100 kursi tamu</li>
                  <li className="mb-1">• 1 meja VIP</li>
                </ul>
                <p className="font-bold text-lg text-purple-600 mb-4">Rp 5.000.000</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300">
                  Pesan Sekarang
                </button>
              </div>
            </div>

            {/* Paket 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
              src="/images/aaa.jpg" 
              alt="Tenda pernikahan" 
              width={900}
              height={200}
              className="rounded-lg shadow-lg"
                />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">PAKET PREMIUM</h3>
                <p className="text-sm text-gray-600 mb-3">Tenda ukuran 8x12m, kapasitas 200 tamu</p>
                <ul className="text-sm text-gray-700 mb-4">
                  <li className="mb-1">• Tenda full dekorasi</li>
                  <li className="mb-1">• 20 meja bundar + taplak</li>
                  <li className="mb-1">• 200 kursi tamu bercover</li>
                  <li className="mb-1">• 1 set meja VIP premium</li>
                </ul>
                <p className="font-bold text-lg text-purple-600 mb-4">Rp 8.500.000</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300">
                  Pesan Sekarang
                </button>
              </div>
            </div>

            {/* Paket 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
              src="/images/aaa.jpg" 
              alt="Tenda pernikahan" 
              width={900}
              height={200}
              className="rounded-lg shadow-lg"
                />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">PAKET LUXURY</h3>
                <p className="text-sm text-gray-600 mb-3">Tenda ukuran 10x15m, kapasitas 300 tamu</p>
                <ul className="text-sm text-gray-700 mb-4">
                  <li className="mb-1">• Tenda luxury + crystal</li>
                  <li className="mb-1">• 30 meja bundar premium</li>
                  <li className="mb-1">• 300 kursi Tiffany</li>
                  <li className="mb-1">• Pelaminan premium</li>
                </ul>
                <p className="font-bold text-lg text-purple-600 mb-4">Rp 15.000.000</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300">
                  Pesan Sekarang
                </button>
              </div>
            </div>

            {/* Paket 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
              src="/images/aaa.jpg" 
              alt="Tenda pernikahan" 
              width={900}
              height={200}
              className="rounded-lg shadow-lg"
                />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">PAKET ROYAL</h3>
                <p className="text-sm text-gray-600 mb-3">Tenda ukuran 12x20m, kapasitas 500 tamu</p>
                <ul className="text-sm text-gray-700 mb-4">
                  <li className="mb-1">• Tenda transparent luxury</li>
                  <li className="mb-1">• 50 meja bundar gold</li>
                  <li className="mb-1">• 500 kursi Chiavari</li>
                  <li className="mb-1">• Pelaminan luxury custom</li>
                </ul>
                <p className="font-bold text-lg text-purple-600 mb-4">Rp 25.000.000</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Butuh paket yang lebih sesuai dengan kebutuhan Anda?</p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
              Hubungi Kami untuk Paket Custom
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Galeri Tenda Pernikahan</h2>
          <p className="text-center text-gray-700 mb-12">Beberapa hasil dekorasi tenda pernikahan yang telah kami kerjakan</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image src="/images/aaa.jpg" alt="Galeri tenda 1" width={900} height={200} className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300" />
            <Image src="/images/aaa.jpg" alt="Galeri tenda 2" width={900} height={200} className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300" />
            <Image src="/images/aaa.jpg" alt="Galeri tenda 3" width={900} height={200} className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300" />
            <Image src="/images/aaa.jpg" alt="Galeri tenda 4" width={900} height={200} className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300" />
            <Image src="/images/aaa.jpg" alt="Galeri tenda 5" width={900} height={200} className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300" />
            <Image src="/images/aaa.jpg" alt="Galeri tenda 6" width={900} height={200} className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300" />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Alamat</h4>
                  <p className="flex items-start">
                    <MapPin className="mr-2 text-purple-600 flex-shrink-0 mt-1" size={18} />
                    <span>Jl. Harmoni Pernikahan No.88, Kota Indah, Kecamatan Bahagia, Kab. Sejahtera 12345</span>
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Telepon</h4>
                  <p className="flex items-center">
                    <Phone className="mr-2 text-purple-600" size={18} />
                    <span>0812-3456-7890</span>
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Email</h4>
                  <p className="flex items-center">
                    <Mail className="mr-2 text-purple-600" size={18} />
                    <span>info@glamtent.com</span>
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Sosial Media</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-purple-600 hover:text-purple-800">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-800">
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-bold mb-2">Jam Operasional</h4>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr>
                        <td className="py-1">Senin - Jumat</td>
                        <td className="py-1">08:00 - 17:00</td>
                      </tr>
                      <tr>
                        <td className="py-1">Sabtu</td>
                        <td className="py-1">09:00 - 15:00</td>
                      </tr>
                      <tr>
                        <td className="py-1">Minggu</td>
                        <td className="py-1">Tutup</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Kirim Pesan</h3>
                <div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nama</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={handleMessageChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleSendMessage}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">GlamTent</h2>
              <p className="text-gray-400">Solusi tenda pernikahan untuk momen tak terlupakan</p>
              <p>22.11.4901_Muhammad Yusuf Andrika </p>
              <p>22.11.4745_NikenLismiati </p>
            </div>
            
            <div className="flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white">About Us</a>
              <a href="#product" className="text-gray-300 hover:text-white">Produk</a>
              <a href="#gallery" className="text-gray-300 hover:text-white">Gallery</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} GlamTent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}