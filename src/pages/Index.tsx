import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', rating: 1450, kd: 1.2 },
  { month: 'Feb', rating: 1520, kd: 1.35 },
  { month: 'Mar', rating: 1480, kd: 1.28 },
  { month: 'Apr', rating: 1650, kd: 1.45 },
  { month: 'May', rating: 1720, kd: 1.52 },
  { month: 'Jun', rating: 1800, kd: 1.65 }
];

const players = [
  { 
    id: 1, 
    nickname: 'Shadow', 
    role: 'AWPer', 
    rating: 1.35, 
    kd: 1.52, 
    hs: '58%',
    avatar: '🎯'
  },
  { 
    id: 2, 
    nickname: 'Phoenix', 
    role: 'Entry Fragger', 
    rating: 1.28, 
    kd: 1.45, 
    hs: '62%',
    avatar: '🔥'
  },
  { 
    id: 3, 
    nickname: 'Viper', 
    role: 'Lurker', 
    rating: 1.42, 
    kd: 1.58, 
    hs: '55%',
    avatar: '🐍'
  },
  { 
    id: 4, 
    nickname: 'Zeus', 
    role: 'IGL', 
    rating: 1.18, 
    kd: 1.32, 
    hs: '51%',
    avatar: '⚡'
  },
  { 
    id: 5, 
    nickname: 'Ghost', 
    role: 'Support', 
    rating: 1.25, 
    kd: 1.38, 
    hs: '53%',
    avatar: '👻'
  }
];

const matches = [
  { opponent: 'Team Alpha', result: 'W', score: '16-12', date: '2024-01-15' },
  { opponent: 'Beta Squad', result: 'W', score: '16-9', date: '2024-01-12' },
  { opponent: 'Cyber Warriors', result: 'L', score: '14-16', date: '2024-01-08' },
  { opponent: 'Elite Force', result: 'W', score: '16-7', date: '2024-01-05' }
];

const achievements = [
  { title: 'ESL Pro League', place: '1st', prize: '$50,000', date: '2024' },
  { title: 'IEM Katowice', place: '2nd', prize: '$30,000', date: '2024' },
  { title: 'BLAST Premier', place: '3rd', prize: '$15,000', date: '2023' },
  { title: 'DreamHack Masters', place: '1st', prize: '$40,000', date: '2023' }
];

export default function Index() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <div className="relative mb-16 overflow-hidden rounded-lg neon-border bg-card p-8 md:p-12 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 neon-text font-heading">
              DL-TEAM
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Professional CS:2 Esports Team
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="text-lg py-2 px-4 bg-primary/20 border-primary neon-border">
                <Icon name="Trophy" size={20} className="mr-2" />
                World Rank #12
              </Badge>
              <Badge className="text-lg py-2 px-4 bg-secondary/20 border-secondary">
                <Icon name="Target" size={20} className="mr-2" />
                Win Rate 68%
              </Badge>
              <Badge className="text-lg py-2 px-4 bg-accent/20 border-accent">
                <Icon name="Users" size={20} className="mr-2" />
                5 Players
              </Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="team" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-card/50 p-1 h-auto">
            <TabsTrigger value="team" className="text-sm md:text-base py-3 data-[state=active]:neon-border">
              <Icon name="Users" size={18} className="mr-2" />
              Team
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-sm md:text-base py-3 data-[state=active]:neon-border">
              <Icon name="BarChart3" size={18} className="mr-2" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="matches" className="text-sm md:text-base py-3 data-[state=active]:neon-border">
              <Icon name="Swords" size={18} className="mr-2" />
              Matches
            </TabsTrigger>
            <TabsTrigger value="achievements" className="text-sm md:text-base py-3 data-[state=active]:neon-border">
              <Icon name="Award" size={18} className="mr-2" />
              Awards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="space-y-6 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6 font-heading">Team Roster</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {players.map((player) => (
                <Card 
                  key={player.id}
                  className="p-6 bg-card/80 border-border hover:neon-border transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedPlayer(player)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {player.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 font-heading group-hover:text-primary transition-colors">
                        {player.nickname}
                      </h3>
                      <p className="text-muted-foreground mb-3">{player.role}</p>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="text-primary font-bold">{player.rating}</div>
                          <div className="text-xs text-muted-foreground">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-secondary font-bold">{player.kd}</div>
                          <div className="text-xs text-muted-foreground">K/D</div>
                        </div>
                        <div className="text-center">
                          <div className="text-accent font-bold">{player.hs}</div>
                          <div className="text-xs text-muted-foreground">HS%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
              <h2 className="text-4xl font-bold font-heading">Player Statistics</h2>
              <div className="flex gap-2 flex-wrap">
                {players.map((player) => (
                  <Badge
                    key={player.id}
                    variant={selectedPlayer.id === player.id ? "default" : "outline"}
                    className="cursor-pointer py-2 px-4 text-sm"
                    onClick={() => setSelectedPlayer(player)}
                  >
                    {player.avatar} {player.nickname}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Card className="p-6 bg-card/80 border-border neon-border">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{selectedPlayer.avatar}</span>
                  <div>
                    <h3 className="text-3xl font-bold font-heading">{selectedPlayer.nickname}</h3>
                    <p className="text-muted-foreground">{selectedPlayer.role}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-3xl font-bold text-primary">{selectedPlayer.rating}</div>
                    <div className="text-sm text-muted-foreground mt-1">Rating 2.0</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                    <div className="text-3xl font-bold text-secondary">{selectedPlayer.kd}</div>
                    <div className="text-sm text-muted-foreground mt-1">K/D Ratio</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/30">
                    <div className="text-3xl font-bold text-accent">{selectedPlayer.hs}</div>
                    <div className="text-sm text-muted-foreground mt-1">Headshot %</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 font-heading">Performance Trend</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rating" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="kd" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--secondary))', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6 font-heading">Recent Matches</h2>
            <div className="space-y-4">
              {matches.map((match, idx) => (
                <Card key={idx} className="p-6 bg-card/80 border-border hover:neon-border transition-all">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <Badge 
                        className={`text-lg py-2 px-4 ${
                          match.result === 'W' 
                            ? 'bg-primary/20 border-primary text-primary' 
                            : 'bg-destructive/20 border-destructive text-destructive'
                        }`}
                      >
                        {match.result === 'W' ? 'WIN' : 'LOSS'}
                      </Badge>
                      <div>
                        <h3 className="text-xl font-bold font-heading">vs {match.opponent}</h3>
                        <p className="text-muted-foreground text-sm">{match.date}</p>
                      </div>
                    </div>
                    <div className="text-3xl font-bold font-heading">{match.score}</div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6 font-heading">Tournament Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, idx) => (
                <Card key={idx} className="p-6 bg-card/80 border-border hover:neon-border transition-all group">
                  <div className="flex items-start gap-4">
                    <Icon 
                      name="Trophy" 
                      size={40} 
                      className="text-primary group-hover:animate-pulse-glow" 
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 font-heading">{achievement.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="outline" className="border-primary text-primary">
                          {achievement.place} Place
                        </Badge>
                        <span className="text-muted-foreground">{achievement.date}</span>
                      </div>
                      <p className="text-lg font-bold text-primary mt-3">{achievement.prize}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center space-y-4">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitch" size={28} fallback="Video" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={28} />
            </a>
          </div>
          <p className="text-muted-foreground">© 2024 DL-Team. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}