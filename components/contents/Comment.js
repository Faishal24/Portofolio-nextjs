"use client"; // Pastikan Anda menggunakan ini untuk interaksi dengan browser

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { generateRandomCombination, formatDate } from "@/utils/utils";
import Image from "next/image";

const Comment = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const querySnapshot = await getDocs(collection(db, "comments"));
    const commentsArray = querySnapshot.docs.map((doc) => doc.data());
    setComments(commentsArray);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    const combination = generateRandomCombination();
    e.preventDefault();
    if (name && comment) {
      // Add comment to Firestore
      await addDoc(collection(db, "comments"), {
        name: name,
        comment: comment,
        avatar: combination,
        createdAt: new Date(),
      });
      setName("");
      setComment("");
      fetchComments();
    }
  };

  return (
    <div className="px-3 py-3 sm:py-9 md:px-6 flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="border border-slate-400 dark:border-slate-600 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          className="border border-slate-400 dark:border-slate-600 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 hover:bg-sky-500 text-white p-2 rounded-lg">
          Submit Comment
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Comments:</h3>
        <div className="flex flex-col gap-3">
          {comments.map((com, index) => (
            <div
              key={index}
              className="border border-slate-400 dark:border-slate-600 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"
            >
              <div className="flex">
                <Image
                  className="w-14 h-14 rounded-full border-4 dark:border-gray-900"
                  src={`https://robohash.org/${com.avatar}.png?set=set4`}
                  alt="icon"
                  height={36}
                  width={36}
                  priority
                />

                <div className="flex flex-col gap-1 ml-3">
                  <div className="flex gap-1 items-center">
                    <p className="text-gray-800 dark:text-gray-200 font-semibold">
                      {com.name}
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      •
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {formatDate(com.createdAt)}
                    </p>
                  </div>

                  <p className="text-gray-800 dark:text-gray-200">
                    {com.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
