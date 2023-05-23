import mongoose, { Model, Schema, model } from 'mongoose'
import { STATUS } from '../../config/global/const'
import { ISoftDeleteQueryHelpers, TSoftDeleteQueryHelpers, withSoftDeletePlugin } from '../../utils/mongoose'

export interface ICourse {
  name: string
  desc: string
  img: string
  slug: string
  status: STATUS
  createdAt?: Date
  updatedAt?: Date
}

const CourseSchema = new Schema<ICourse>({
  name: { type: String, required: true, maxLength: 255 },
  desc: { type: String },
  img: { type: String, required: true },
  slug: { type: String, required: true, maxLength: 255 },
  status: { type: String, required: true, default: 'hidden' },
}, { timestamps: true })

withSoftDeletePlugin(CourseSchema)
// CourseSchema.plugin(softDeletePlugin)

const Course = model<ICourse, ISoftDeleteQueryHelpers<ICourse>>('Course', CourseSchema)
console.log(Course)


export default Course