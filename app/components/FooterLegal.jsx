// components/FooterLegal.jsx
import Link from "next/link";

const FooterLegal = () => {
  return (
    <div className="text-sm text-[#71815e] border-t pt-5 mt-5">
      <div className="flex flex-col md:flex-row items-center justify-around gap-4   2xl:container 2xl:mx-auto">
        {/* Links */}
        <div className="flex gap-2">
          <Link
            href="/privacy-policy"
            className="hover:text-black transition hover:underline"
          >
            حریم خصوصی
          </Link>
          <span>و</span>
          <Link
            href="/terms"
            className="hover:text-black transition hover:underline"
          >
            شرایط استفاده
          </Link>
        </div>

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} کلینیک دکتر مرجان خلیلی. تمامی حقوق محفوظ
          است.
        </p>

        {/* Developer */}
        <p className="text-xs text-gray-400">
          Developed by{" "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            className="hover:text-black transition"
          >
            Parsa Dehghan Pour
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterLegal;
