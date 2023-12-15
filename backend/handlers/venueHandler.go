package handlers

import (
	"net/http"
	"strings"

	"tk-challenge/data"

	"github.com/gin-gonic/gin"
)

func SearchVenue(c *gin.Context) {
	searchQuery := c.Query("q")

	venues := data.GetMockData()
	filteredVenues := []data.Venue{}
	for _, venue := range venues {
		if strings.Contains(strings.ToLower(venue.Type), strings.ToLower(searchQuery)) {
			filteredVenues = append(filteredVenues, venue)
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"data": filteredVenues,
	})
}
