import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className="bg-[#222] text-white p-[30px_20px] md:p-[40px] lg:p-[40px_80px] w-full box-border">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-[30px] md:gap-0 w-full">
              <div className="max-w-[300px]">
                  <Link
                      href={'/'}
                      className="leading-none lg:text-[20px] font-normal shrink-0 select-none cursor-pointer"
                  >
                      <span>SET</span>
                      <span className="text-primary-pink font-bold hover:text-primary-pink-hover">
                          MySpace
                      </span>
                  </Link>
                  <p className="text-[13px] text-[#aaa] leading-[1.6]">
                      A Unit Of UrbanBarrow Pvt. Ltd.
                      <br />
                      Whitefield, Bangalore
                      <br />
                      Karnataka, India 560066
                  </p>
              </div>

              <div className="flex flex-col items-start md:items-center justify-center flex-1 pt-0 md:pt-[10px] w-full md:w-auto">
                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-[10px] sm:gap-[16px] mb-[15px] md:mb-[24px] w-full md:w-auto">
                      <Link
                          href="/"
                          className="text-[#ddd] text-[14px] font-medium transition-colors hover:text-[var(--color-primary-pink)]"
                      >
                          Help & Support
                      </Link>
                      <span className="hidden sm:block text-[#DE3163] text-[12px]">|</span>
                      <Link
                          href="/"
                          className="text-[#ddd] text-[14px] font-medium transition-colors hover:text-[var(--color-primary-pink)]"
                      >
                          Signup As Partner
                      </Link>
                      <span className="hidden sm:block text-[#DE3163] text-[12px]">|</span>
                      <Link
                          href="/"
                          className="text-[#ddd] text-[14px] font-medium transition-colors hover:text-[var(--color-primary-pink)]"
                      >
                          Terms & Conditions
                      </Link>
                      <span className="hidden sm:block text-[#DE3163] text-[12px]">|</span>
                      <Link
                          href="/"
                          className="text-[#ddd] text-[14px] font-medium transition-colors hover:text-[var(--color-primary-pink)]"
                      >
                          Privacy Policy
                      </Link>
                  </div>

                  <p className="text-[13px] text-[#888]">All Rights reserved 2023 setmyspace</p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
