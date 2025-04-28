"use client"

import type React from "react"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ImageIcon, Info, Lock, Plus, X } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function CreatePostPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("discussion")
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [isPremium, setIsPremium] = useState(false)
  const [hasImage, setHasImage] = useState(false)

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag) && tags.length < 5) {
      setTags([...tags, currentTag])
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the post data to your backend
    router.push("/dashboard/student/community")
  }

  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/dashboard/student/community">
              <ArrowLeft className="h-4 w-4" /> Back to Community
            </Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Create a New Post</CardTitle>
                <CardDescription>Share your knowledge, ask questions, or start a discussion</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Post Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter a descriptive title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="discussion">Discussion</SelectItem>
                        <SelectItem value="question">Question</SelectItem>
                        <SelectItem value="resource">Resource</SelectItem>
                        <SelectItem value="project">Project</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your post content here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={10}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (up to 5)</Label>
                    <div className="flex gap-2">
                      <Input
                        id="tags"
                        placeholder="Add a tag"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                      />
                      <Button type="button" onClick={handleAddTag} disabled={tags.length >= 5 || !currentTag}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="gap-1">
                            {tag}
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-4 w-4 p-0 hover:bg-transparent"
                              onClick={() => handleRemoveTag(tag)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {hasImage ? (
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-3">
                          <ImageIcon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium">Drag and drop an image here</h3>
                        <p className="text-sm text-muted-foreground mb-4">Supported formats: PNG, JPG, GIF (max 5MB)</p>
                        <Button type="button" variant="outline">
                          Choose File
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button type="button" variant="outline" className="gap-1" onClick={() => setHasImage(true)}>
                      <ImageIcon className="h-4 w-4" /> Add Image
                    </Button>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="premium"
                      checked={isPremium}
                      onCheckedChange={(checked) => setIsPremium(checked as boolean)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="premium"
                        className="flex items-center gap-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Make this a premium post <Lock className="h-3 w-3" />
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Premium posts can be accessed by spending edupoints
                      </p>
                    </div>
                  </div>

                  {isPremium && (
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Premium Post Information</h3>
                        <p className="text-sm text-muted-foreground">
                          You'll earn 50% of the edupoints spent by users to access your premium content. Premium posts
                          should provide significant value to the community.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" asChild>
                      <Link href="/dashboard/student/community">Cancel</Link>
                    </Button>
                    <Button type="submit">Publish Post</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-1/3 space-y-4">
            <Card className="glass-card sticky top-20">
              <CardHeader>
                <CardTitle>Posting Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Tips for a Great Post</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Use a clear, descriptive title</li>
                    <li>Be specific and provide details</li>
                    <li>Format your content for readability</li>
                    <li>Add relevant tags to reach the right audience</li>
                    <li>Include code snippets or images if relevant</li>
                    <li>Be respectful and constructive</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Category Guidelines</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Discussion:</span>
                      <p className="text-muted-foreground">
                        Start conversations about topics, share opinions, or discuss trends
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Question:</span>
                      <p className="text-muted-foreground">
                        Ask specific questions when you need help or clarification
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Resource:</span>
                      <p className="text-muted-foreground">Share helpful resources, guides, or learning materials</p>
                    </div>
                    <div>
                      <span className="font-medium">Project:</span>
                      <p className="text-muted-foreground">
                        Showcase your projects, get feedback, or find collaborators
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted">
                  <h3 className="font-medium">Premium Posts</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Premium posts allow you to earn edupoints when others access your high-value content. Make sure
                    premium content provides exceptional value.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarNavigation>
  )
}
