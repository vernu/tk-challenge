package main

import (
	"os"
	"tk-challenge/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(config))
	router.GET("/venues", handlers.SearchVenue)
	router.Run(":" + os.Getenv("PORT"))
}
