"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, BookOpen, ShieldCheck, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignupPage() {
  const router = useRouter()
  const [role, setRole] = useState("student")
  const [step, setStep] = useState(1)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleOnboarding = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/dashboard/${role}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/login" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Back to Login
          </Link>
        </Button>
      </div>

      <Card className="w-full max-w-md glass-card">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Join EduSync to access your personalized learning experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <Tabs defaultValue={role} onValueChange={setRole} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Student</span>
                </TabsTrigger>
                <TabsTrigger value="teacher" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Teacher</span>
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="hidden sm:inline">Admin</span>
                </TabsTrigger>
              </TabsList>

              {["student", "teacher", "admin"].map((userRole) => (
                <TabsContent key={userRole} value={userRole}>
                  <form onSubmit={handleSignup}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`${userRole}-firstname`}>First Name</Label>
                          <Input id={`${userRole}-firstname`} placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`${userRole}-lastname`}>Last Name</Label>
                          <Input id={`${userRole}-lastname`} placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${userRole}-email`}>Email</Label>
                        <Input id={`${userRole}-email`} placeholder={`${userRole}@edusync.com`} type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${userRole}-password`}>Password</Label>
                        <Input id={`${userRole}-password`} type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${userRole}-confirm-password`}>Confirm Password</Label>
                        <Input id={`${userRole}-confirm-password`} type="password" required />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`${userRole}-terms`} required />
                        <label
                          htmlFor={`${userRole}-terms`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            terms and conditions
                          </Link>
                        </label>
                      </div>
                      <Button type="submit" className="w-full">
                        Create Account
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium">Almost there!</h3>
                <p className="text-sm text-muted-foreground">Let's personalize your experience</p>
              </div>

              <form onSubmit={handleOnboarding}>
                {role === "student" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Select Your Department</Label>
                      <Select defaultValue="cs">
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="eng">Engineering</SelectItem>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Your Interests (Select at least 3)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Web Development",
                          "Machine Learning",
                          "Data Science",
                          "Mobile Apps",
                          "UI/UX Design",
                          "Cybersecurity",
                          "Cloud Computing",
                          "Game Development",
                        ].map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox id={`interest-${interest}`} />
                            <label
                              htmlFor={`interest-${interest}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Learning Goals</Label>
                      <Select defaultValue="career">
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="career">Career Preparation</SelectItem>
                          <SelectItem value="skills">Skill Development</SelectItem>
                          <SelectItem value="academic">Academic Excellence</SelectItem>
                          <SelectItem value="research">Research Focus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {role === "teacher" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Department</Label>
                      <Select defaultValue="cs">
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="eng">Engineering</SelectItem>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Subjects You Teach</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Programming",
                          "Data Structures",
                          "Algorithms",
                          "Databases",
                          "Web Development",
                          "Machine Learning",
                          "Software Engineering",
                          "Computer Networks",
                        ].map((subject) => (
                          <div key={subject} className="flex items-center space-x-2">
                            <Checkbox id={`subject-${subject}`} />
                            <label
                              htmlFor={`subject-${subject}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {subject}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Years of Experience</Label>
                      <Select defaultValue="3-5">
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {role === "admin" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Admin Role</Label>
                      <Select defaultValue="system">
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">System Administrator</SelectItem>
                          <SelectItem value="content">Content Moderator</SelectItem>
                          <SelectItem value="user">User Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Department</Label>
                      <Select defaultValue="it">
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it">IT Department</SelectItem>
                          <SelectItem value="academic">Academic Affairs</SelectItem>
                          <SelectItem value="student">Student Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Access Level</Label>
                      <Select defaultValue="full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select access level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full Access</SelectItem>
                          <SelectItem value="limited">Limited Access</SelectItem>
                          <SelectItem value="readonly">Read Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full mt-6">
                  Complete Setup
                </Button>
              </form>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
