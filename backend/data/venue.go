package data

type Venue struct {
	Id       int    `json:"id"`
	Name     string `json:"name"`
	Type     string `json:"type"`
	Date     string `json:"date"`
	Location string `json:"location"`
}

func GetMockData() []Venue {
	return []Venue{
		{
			Id:       1,
			Name:     "The Avenue",
			Type:     "Football Field",
			Date:     "12/12/2023",
			Location: "Addis Ababa",
		},

		{
			Id:       2,
			Name:     "Paradise Garden",
			Type:     "Football Field",
			Date:     "12/12/2023",
			Location: "Addis Ababa",
		},

		{
			Id:       3,
			Name:     "Silver Star",
			Type:     "Basketball Court",
			Date:     "12/12/2023",
			Location: "Addis Ababa",
		},

		{
			Id:       4,
			Name:     "The Venue",
			Type:     "Basketball Court",
			Date:     "12/12/2023",
			Location: "Istanbul",
		},
		{
			Id:       5,
			Name:     "The Golden Gate",
			Type:     "Tennis Court",
			Date:     "12/12/2023",
			Location: "New York",
		},
	}

}
