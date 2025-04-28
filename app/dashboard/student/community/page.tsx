import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookmarkIcon,
  MessageCircle,
  MoreHorizontal,
  PenLine,
  Search,
  Share2,
  ThumbsUp,
  TrendingUpIcon as Trending,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CommunityPage() {
  return (
    <SidebarNavigation role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Community Hub</h1>
            <p className="text-muted-foreground">Connect, share, and learn with your peers</p>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild className="gap-1">
              <Link href="/dashboard/student/community/create">
                <PenLine className="h-4 w-4" /> Create Post
              </Link>
            </Button>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search community..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-4">
            <Tabs defaultValue="trending">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="following">Following</TabsTrigger>
                </TabsList>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="discussion">Discussions</SelectItem>
                    <SelectItem value="question">Questions</SelectItem>
                    <SelectItem value="resource">Resources</SelectItem>
                    <SelectItem value="project">Projects</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <TabsContent value="trending" className="mt-4 space-y-4">
                {[
                  {
                    id: "1",
                    title: "How to implement a balanced binary search tree?",
                    content:
                      "I'm struggling with implementing a balanced binary search tree for my data structures assignment. Has anyone successfully implemented AVL or Red-Black trees?",
                    author: "Alex Johnson",
                    avatar: "/placeholder.svg?height=40&width=40",
                    time: "2 hours ago",
                    likes: 45,
                    comments: 12,
                    category: "question",
                    tags: ["Data Structures", "Algorithms", "Trees"],
                    isPremium: false,
                  },
                  {
                    id: "2",
                    title: "Ultimate Guide to System Design Interviews",
                    content:
                      "I've compiled a comprehensive guide for system design interviews based on my experience interviewing at FAANG companies. This covers scalability, database design, caching strategies, and more.",
                    author: "Samantha Lee",
                    avatar: "/placeholder.svg?height=40&width=40",
                    time: "1 day ago",
                    likes: 128,
                    comments: 34,
                    category: "resource",
                    tags: ["System Design", "Interviews", "Career"],
                    isPremium: true,
                    image: "/placeholder.svg?height=200&width=400",
                  },
                  {
                    id: "3",
                    title: "My experience with the new React Server Components",
                    content:
                      "I've been experimenting with React Server Components in Next.js 13 and wanted to share my thoughts on the new paradigm. Here's what I've learned so far...",
                    author: "David Chen",
                    avatar: "/placeholder.svg?height=40&width=40",
                    time: "3 days ago",
                    likes: 89,
                    comments: 21,
                    category: "discussion",
                    tags: ["React", "Web Development", "Next.js"],
                    isPremium: false,
                  },
                ].map((post, i) => (
                  <Card key={i} className="glass-card overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={post.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={
                              post.category === "question"
                                ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                                : post.category === "resource"
                                  ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                  : "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                            }
                          >
                            {post.category}
                          </Badge>
                          {post.isPremium && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              Premium
                            </Badge>
                          )}
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="text-lg mt-2">
                        <Link href={`/dashboard/student/community/${post.id}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-muted-foreground line-clamp-3">{post.content}</p>
                      {post.image && (
                        <div className="mt-3 rounded-md overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag, j) => (
                          <Badge key={j} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" /> {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                          <MessageCircle className="h-4 w-4" /> {post.comments}
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <BookmarkIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="latest" className="mt-4 space-y-4">
                {[
                  {
                    id: "4",
                    title: "Just finished my first machine learning project!",
                    content:
                      "After weeks of learning, I've finally completed my first ML project - a sentiment analysis model for movie reviews. Would love some feedback from the community!",
                    author: "Maria Rodriguez",
                    avatar: "/placeholder.svg?height=40&width=40",
                    time: "30 minutes ago",
                    likes: 12,
                    comments: 5,
                    category: "project",
                    tags: ["Machine Learning", "Python", "NLP"],
                    isPremium: false,
                  },
                  {
                    id: "5",
                    title: "Question about database normalization",
                    content:
                      "I'm confused about the difference between 3NF and BCNF. Can someone explain with a practical example?",
                    author: "James Wilson",
                    avatar: "/placeholder.svg?height=40&width=40",
                    time: "2 hours ago",
                    likes: 8,
                    comments: 7,
                    category: "question",
                    tags: ["Databases", "SQL", "Normalization"],
                    isPremium: false,
                  },
                  {
                    id: "6",
                    title: "Free resources for learning cybersecurity",
                    content:
                      "I've compiled a list of free resources for anyone interested in learning cybersecurity, including courses, CTF platforms, and practice labs.",
                    author: "Emily Zhang",
                    avatar: "/placeholder.svg?height=40&width=40",
                    time: "5 hours ago",
                    likes: 32,
                    comments: 9,
                    category: "resource",
                    tags: ["Cybersecurity", "Hacking", "Resources"],
                    isPremium: false,
                    image: "/placeholder.svg?height=200&width=400",
                  },
                ].map((post, i) => (
                  <Card key={i} className="glass-card overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={post.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={
                              post.category === "question"
                                ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                                : post.category === "resource"
                                  ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                  : post.category === "project"
                                    ? "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"
                                    : "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                            }
                          >
                            {post.category}
                          </Badge>
                          {post.isPremium && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              Premium
                            </Badge>
                          )}
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="text-lg mt-2">
                        <Link href={`/dashboard/student/community/${post.id}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-muted-foreground line-clamp-3">{post.content}</p>
                      {post.image && (
                        <div className="mt-3 rounded-md overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag, j) => (
                          <Badge key={j} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" /> {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                          <MessageCircle className="h-4 w-4" /> {post.comments}
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <BookmarkIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="following" className="mt-4 space-y-4">
                <div className="p-4 rounded-lg border text-center space-y-2">
                  <Users className="h-8 w-8 mx-auto text-muted-foreground" />
                  <h3 className="font-medium">Follow more people</h3>
                  <p className="text-sm text-muted-foreground">
                    You're not following anyone yet. Follow other students and teachers to see their posts here.
                  </p>
                  <Button className="mt-2">Discover People</Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center justify-center">
              <Button variant="outline" className="gap-1">
                <MoreHorizontal className="h-4 w-4" /> Load More
              </Button>
            </div>
          </div>

          <div className="md:w-1/3 space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
                <CardDescription>Popular discussions right now</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { topic: "React Server Components", posts: 128, trending: true },
                  { topic: "Machine Learning Projects", posts: 96, trending: true },
                  { topic: "Internship Opportunities", posts: 84, trending: false },
                  { topic: "Competitive Programming", posts: 72, trending: false },
                  { topic: "UI/UX Design", posts: 65, trending: true },
                ].map((topic, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2">
                      {topic.trending && <Trending className="h-4 w-4 text-primary" />}
                      <span className="font-medium">{topic.topic}</span>
                    </div>
                    <Badge variant="outline">{topic.posts} posts</Badge>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Topics
                </Button>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Active Contributors</CardTitle>
                <CardDescription>Top community members</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Alex Johnson",
                    avatar: "/placeholder.svg?height=40&width=40",
                    role: "Student",
                    contributions: 156,
                  },
                  {
                    name: "Prof. Smith",
                    avatar: "/placeholder.svg?height=40&width=40",
                    role: "Teacher",
                    contributions: 132,
                  },
                  {
                    name: "Samantha Lee",
                    avatar: "/placeholder.svg?height=40&width=40",
                    role: "Student",
                    contributions: 98,
                  },
                  {
                    name: "David Chen",
                    avatar: "/placeholder.svg?height=40&width=40",
                    role: "Student",
                    contributions: 87,
                  },
                  {
                    name: "Dr. Williams",
                    avatar: "/placeholder.svg?height=40&width=40",
                    role: "Teacher",
                    contributions: 76,
                  },
                ].map((user, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.role}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {user.contributions} pts
                    </Badge>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Contributors
                </Button>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Our community thrives on respect, collaboration, and knowledge sharing. Please follow these
                  guidelines:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Be respectful and inclusive</li>
                  <li>Share valuable content and resources</li>
                  <li>Give proper attribution when sharing others' work</li>
                  <li>Report inappropriate content</li>
                  <li>Help others and engage constructively</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarNavigation>
  )
}
