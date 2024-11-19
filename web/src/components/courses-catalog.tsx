import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import courseImageOne from "../assets/img/course-1.jpg";
import courseImageTwo from "../assets/img/course-2.jpg";
import courseImageThree from "../assets/img/course-3.jpg";

import trainerImageOne from "../assets/img/trainers/trainer-1-2.jpg";
import trainerImageTwo from "../assets/img/trainers/trainer-2-2.jpg";
import trainerImageThree from "../assets/img/trainers/trainer-3-2.jpg";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function CoursesCatalog() {
  return (
    <section id="courses-list" className="section courses-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 align-items-stretch flex">
            <Card className="m-2 max-w-md rounded-lg border shadow-lg">
              <CardContent>
                {/* Course Image */}
                <Image
                  src={courseImageOne}
                  alt="Course"
                  width={400}
                  height={200}
                  className="mt-5 w-full rounded-t-lg object-cover"
                />
              </CardContent>
              <CardContent className="px-4 py-2">
                {/* Category and Price */}
                <div className="mb-2 flex items-center justify-between">
                  <Badge>Web Development</Badge>
                  <span className="text-lg font-semibold text-gray-800">
                    $169
                  </span>
                </div>
                {/* Course Title */}
                <Link href="/">
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors hover:text-primary">
                    Website Design
                  </h3>
                  {/* Description */}
                  <p className="mt-1 text-sm text-gray-600">
                    Et architecto provident deleniti facere repellat nobis iste.
                    Id facere quia quae dolores dolorem tempore.
                  </p>
                </Link>
              </CardContent>
              <CardFooter className="border-t px-4 py-2">
                <div className="flex w-full items-center justify-between">
                  {/* Trainer Info */}
                  <div className="flex items-center">
                    <Image
                      src={trainerImageOne}
                      alt="Trainer"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <a
                      href=""
                      className="ml-2 font-medium text-gray-800 hover:underline"
                    >
                      Antonio
                    </a>
                  </div>
                  {/* Trainer Rank */}
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <i className="bi bi-person"></i>
                      <span>50</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="bi bi-heart"></i>
                      <span>65</span>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="m-2 max-w-md rounded-lg border shadow-lg">
              <CardContent>
                {/* Course Image */}
                <Image
                  src={courseImageTwo}
                  alt="Course"
                  width={400}
                  height={200}
                  className="mt-5 w-full rounded-t-lg object-cover"
                />
              </CardContent>
              <CardContent className="px-4 py-2">
                {/* Category and Price */}
                <div className="mb-2 flex items-center justify-between">
                  <Badge>Web Development</Badge>
                  <span className="text-lg font-semibold text-gray-800">
                    $169
                  </span>
                </div>

                {/* Course Title */}
                <Link href="/">
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors hover:text-primary">
                    Website Design
                  </h3>
                  {/* Description */}
                  <p className="mt-1 text-sm text-gray-600">
                    Et architecto provident deleniti facere repellat nobis iste.
                    Id facere quia quae dolores dolorem tempore.
                  </p>
                </Link>
              </CardContent>
              <CardFooter className="border-t px-4 py-2">
                <div className="flex w-full items-center justify-between">
                  {/* Trainer Info */}
                  <div className="flex items-center">
                    <Image
                      src={trainerImageTwo}
                      alt="Trainer"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <a
                      href=""
                      className="ml-2 font-medium text-gray-800 hover:underline"
                    >
                      Antonio
                    </a>
                  </div>
                  {/* Trainer Rank */}
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <i className="bi bi-person"></i>
                      <span>50</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="bi bi-heart"></i>
                      <span>65</span>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="m-2 max-w-md rounded-lg border shadow-lg">
              <CardContent>
                {/* Course Image */}
                <Image
                  src={courseImageThree}
                  alt="Course"
                  width={400}
                  height={200}
                  className="mt-5 w-full rounded-t-lg object-cover"
                />
              </CardContent>
              <CardContent className="px-4 py-2">
                {/* Category and Price */}
                <div className="mb-2 flex items-center justify-between">
                  <Badge>Web Development</Badge>
                  <span className="text-lg font-semibold text-gray-800">
                    $169
                  </span>
                </div>
                {/* Course Title */}
                <Link href="/">
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors hover:text-primary">
                    Website Design
                  </h3>
                  {/* Description */}
                  <p className="mt-1 text-sm text-gray-600">
                    Et architecto provident deleniti facere repellat nobis iste.
                    Id facere quia quae dolores dolorem tempore.
                  </p>
                </Link>
              </CardContent>
              <CardFooter className="border-t px-4 py-2">
                <div className="flex w-full items-center justify-between">
                  {/* Trainer Info */}
                  <div className="flex items-center">
                    <Image
                      src={trainerImageOne}
                      alt="Trainer"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <a
                      href=""
                      className="ml-2 font-medium text-gray-800 hover:underline"
                    >
                      Antonio
                    </a>
                  </div>
                  {/* Trainer Rank */}
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <i className="bi bi-person"></i>
                      <span>50</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="bi bi-heart"></i>
                      <span>65</span>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
