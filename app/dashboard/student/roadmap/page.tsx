"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RoadmapPage() {
  const [currentSkill, setCurrentSkill] = useState("")
  const [goalSkill, setGoalSkill] = useState("")
  const [description, setDescription] = useState("")
  const [timeframe, setTimeframe] = useState("3-months")
  const [roadmapGenerated, setRoadmapGenerated] = useState(false)
  
  const handleGenerateRoadmap = () => {
    // In a real app, this would call an API to generate the roadmap
    setRoadmapGenerated(true)
  }
  
  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Learning Roadmap</h1>
            <p className="text-muted-foreground">Create a personalized path to achieve your learning goals</p>
          </div>
          <Button className="gap-1">
            <Sparkles className="h-4 w-4" /> Generate with AI
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Create Your Learning Roadmap</CardTitle>
                <CardDescription>Tell us what you want to learn and we'll create a personalized path</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Skills</label>
                  <Input 
                    placeholder="e.g., JavaScript, HTML, CSS" 
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">List your current skills and proficiency levels</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Skill or Role</label>
                  <Input 
                    placeholder="e.g., Full-Stack Developer, Machine Learning Engineer" 
                    value={goalSkill}
                    onChange={(e) => setGoalSkill(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">What skill or role do you want to achieve?</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional Details</label>
                  <Textarea 
                    placeholder="Describe your learning goals, preferences, and any specific areas you want to focus on..." 
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Timeframe</label>
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-month">1 Month</SelectItem>
                        <SelectItem value="3-months">3 Months</SelectItem>
                        <SelectItem value="6-months">6 Months</SelectItem>
                        <SelectItem value="1-year">1 Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Learning Pace</label>
                    <Select defaultValue="moderate">
                      <SelectTrigger>
                        <SelectValue placeholder="Select pace" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relaxed">Relaxed (5-7 hours/week)</SelectItem>
                        <SelectItem value="moderate">Moderate (10-15 hours/week)</SelectItem>
                        <SelectItem value="intensive">Intensive (20+ hours/week)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleGenerateRoadmap} disabled={!currentSkill || !goalSkill}>
                  Generate Roadmap
                </Button>
              </CardFooter>
            </Card>

            {roadmapGenerated && (
              <Card className="glass-card mt-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Your Path to {goalSkill}</CardTitle>
                    <Badge className="bg-muted"></Badge>

\
