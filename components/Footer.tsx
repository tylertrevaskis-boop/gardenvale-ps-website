import React from 'react';

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#003D5C'}} className="text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="font-semibold text-lg mb-4">Contact Us</p>
            <div className="space-y-3 text-gray-300 text-sm">
              <p><strong>Senior Campus (Year 3–6)</strong><br />Landcox Street, East Brighton VIC 3187<br />(03) 9596 2871</p>
              <p><strong>Junior Campus (Prep–Year 2)</strong><br />Landcox Street, East Brighton VIC 3187<br />(03) 9596 8550</p>
              <p><strong>Email</strong><br />gardenvale.ps@education.vic.gov.au</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4">Quick Links</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-300 transition">About</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Learning</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Wellbeing</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">News</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Enrolments</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4">For Families</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-300 transition">Calendar</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Newsletter</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">School Council</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Policies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4">Resources</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-300 transition">Annual Reports</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Child Safe Standards</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Uniform Info</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-3">We acknowledge the Bunurong people of the Kulin Nation, the Traditional Owners of the land where our school is located.</p>
          <p>© 2024 Gardenvale Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
