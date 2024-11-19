'use server'

import { db } from "@/db/client";
import {
  courses,
  enrollments,
  lessons,
  payments,
  progress,
  users,
} from "@/db/schema";
import bcrypt from "bcrypt";
import { and, eq } from "drizzle-orm";

export async function registerUser(
  name: string,
  email: string,
  password: string,
  isTutor: boolean = false,
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
      isTutor,
    })
    .returning();
  return newUser[0];
}

export async function createCourse(
  tutorId: number,
  title: string,
  description: string,
  price: number,
) {
  const newCourse = await db
    .insert(courses)
    .values({
      tutorId,
      title,
      description,
      price,
    })
    .returning();
  return newCourse[0];
}

export async function enrollInCourse(userId: number, courseId: number) {
  const newEnrollment = await db
    .insert(enrollments)
    .values({
      userId,
      courseId,
    })
    .returning();
  return newEnrollment[0];
}

export async function processPayment(
  userId: number,
  courseId: number,
  amount: number,
  paymentGatewayId: string,
  paymentStatus: string,
) {
  const payment = await db
    .insert(payments)
    .values({
      userId,
      courseId,
      amount,
      paymentGatewayId,
      paymentStatus,
    })
    .returning();
  return payment[0];
}

export async function addLesson(
  courseId: number,
  title: string,
  videoUrl: string,
  notes: string,
  resources: string,
) {
  const newLesson = await db
    .insert(lessons)
    .values({
      courseId,
      title,
      videoUrl,
      notes,
      resources,
    })
    .returning();
  return newLesson[0];
}

export async function getLessons(courseId: number) {
  const courseLessons = await db
    .select()
    .from(lessons)
    .where(eq(lessons.courseId, courseId));
  return courseLessons;
}

export async function trackProgress(
  userId: number,
  lessonId: number,
  completed: boolean,
) {
  const updatedProgress = await db
    .insert(progress)
    .values({
      userId,
      lessonId,
      completed,
      completedAt: completed ? new Date() : null,
    })
    .onConflictDoUpdate({
      target: [progress.userId, progress.lessonId],
      set: { completed, completedAt: completed ? new Date() : null },
    })
    .returning();
  return updatedProgress[0];
}

export async function getUserProgress(userId: number, courseId: number) {
  const lessonProgress = await db
    .select({
      lessonId: lessons.id,
      title: lessons.title,
      videoUrl: lessons.videoUrl,
      notes: lessons.notes,
      resources: lessons.resources,
      completed: progress.completed,
      completedAt: progress.completedAt,
    })
    .from(lessons)
    .leftJoin(
      progress,
      and(eq(lessons.id, progress.lessonId), eq(progress.userId, userId)),
    )
    .where(eq(lessons.courseId, courseId));
  return lessonProgress;
}
